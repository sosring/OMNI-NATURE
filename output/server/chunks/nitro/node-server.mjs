globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import mongoose from 'mongoose';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const { DB_URI, DB_KEY } = useRuntimeConfig();
const _96h8pNr8SP = defineEventHandler(async () => {
  try {
    const uri = DB_URI.replace("<password>", DB_KEY);
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log("DB connection established.");
  } catch (err) {
    console.log("DB connection failed.", err);
  }
});

const plugins = [
  _96h8pNr8SP
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/OMNI.pdf": {
    "type": "application/pdf",
    "etag": "\"4eea9e-ZOW7q0rTVAJPI/3/l4JhGbME3NQ\"",
    "mtime": "2023-03-22T08:12:17.440Z",
    "size": 5171870,
    "path": "../public/OMNI.pdf"
  },
  "/images/Omni-logo.png": {
    "type": "image/png",
    "etag": "\"13e6f-PfOq275/+X06cj97+NpSNIdKBUc\"",
    "mtime": "2023-03-22T08:12:17.423Z",
    "size": 81519,
    "path": "../public/images/Omni-logo.png"
  },
  "/images/community.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c56e-ltrLPLElwCemfAvkOUunv5rj7y8\"",
    "mtime": "2023-03-22T08:12:17.423Z",
    "size": 312686,
    "path": "../public/images/community.jpg"
  },
  "/images/educate-youth.jpg": {
    "type": "image/jpeg",
    "etag": "\"47b78-aucwwIBaLql2+KvuzcR6rJrDHe4\"",
    "mtime": "2023-03-22T08:12:17.416Z",
    "size": 293752,
    "path": "../public/images/educate-youth.jpg"
  },
  "/images/environment-goals.png": {
    "type": "image/png",
    "etag": "\"7a8d7-bAVvXMRicuYolpYUL3tn0D8961I\"",
    "mtime": "2023-03-22T08:12:17.413Z",
    "size": 501975,
    "path": "../public/images/environment-goals.png"
  },
  "/images/environmental-protection.jpg": {
    "type": "image/jpeg",
    "etag": "\"62a11-LGz7eL8NyFag3m6cOECbjr6Meqc\"",
    "mtime": "2023-03-22T08:12:17.410Z",
    "size": 403985,
    "path": "../public/images/environmental-protection.jpg"
  },
  "/images/favicon.png": {
    "type": "image/png",
    "etag": "\"14561-cjLikApqCl9CeJolUDbR072Bq+Y\"",
    "mtime": "2023-03-22T08:12:17.403Z",
    "size": 83297,
    "path": "../public/images/favicon.png"
  },
  "/images/four-pillars.jpg": {
    "type": "image/jpeg",
    "etag": "\"43631-9MQx9/BNnpnRwwry2h+39y8E8Xw\"",
    "mtime": "2023-03-22T08:12:17.400Z",
    "size": 276017,
    "path": "../public/images/four-pillars.jpg"
  },
  "/images/four-pillars.png": {
    "type": "image/png",
    "etag": "\"dd5e-ej+UN+iPFzrF9sYBCRSD94n5cok\"",
    "mtime": "2023-03-22T08:12:17.400Z",
    "size": 56670,
    "path": "../public/images/four-pillars.png"
  },
  "/images/green-empowerment.jpg": {
    "type": "image/jpeg",
    "etag": "\"b69d-b+57HYcyei5OlVi3JfZik4GFTTE\"",
    "mtime": "2023-03-22T08:12:17.396Z",
    "size": 46749,
    "path": "../public/images/green-empowerment.jpg"
  },
  "/images/holding-plant.png": {
    "type": "image/png",
    "etag": "\"7e036-9wuCTra13PgHYxhNRhKstz2QR0w\"",
    "mtime": "2023-03-22T08:12:17.393Z",
    "size": 516150,
    "path": "../public/images/holding-plant.png"
  },
  "/images/net-zero.jpg": {
    "type": "image/jpeg",
    "etag": "\"1105c-M5ztsitWtKqFtQNaKVWNv/D/O0A\"",
    "mtime": "2023-03-22T08:12:17.390Z",
    "size": 69724,
    "path": "../public/images/net-zero.jpg"
  },
  "/images/plant.jpg": {
    "type": "image/jpeg",
    "etag": "\"50bc5-yYuI7zEzkSwc+LOmajIjL8ILeko\"",
    "mtime": "2023-03-22T08:12:17.390Z",
    "size": 330693,
    "path": "../public/images/plant.jpg"
  },
  "/images/pop-bg.png": {
    "type": "image/png",
    "etag": "\"64302-ijvK4gXK8jhyCdzXqa+OWb4eYnA\"",
    "mtime": "2023-03-22T08:12:17.383Z",
    "size": 410370,
    "path": "../public/images/pop-bg.png"
  },
  "/images/rain-water-harvesting.jpg": {
    "type": "image/jpeg",
    "etag": "\"d411-aoiuCJCzWoF6t2UdSCa3J480wxk\"",
    "mtime": "2023-03-22T08:12:17.380Z",
    "size": 54289,
    "path": "../public/images/rain-water-harvesting.jpg"
  },
  "/images/solar-panels.jpg": {
    "type": "image/jpeg",
    "etag": "\"f66c6-xJ6NFyAJUkJETbY0IR0/c1eIhtg\"",
    "mtime": "2023-03-22T08:12:17.376Z",
    "size": 1009350,
    "path": "../public/images/solar-panels.jpg"
  },
  "/images/sustainable-environment.jpg": {
    "type": "image/jpeg",
    "etag": "\"ab00-vaYdSsQCAwtLZ5z24BsxDrdbuKc\"",
    "mtime": "2023-03-22T08:12:17.370Z",
    "size": 43776,
    "path": "../public/images/sustainable-environment.jpg"
  },
  "/images/sustainable-tech.jpg": {
    "type": "image/jpeg",
    "etag": "\"65508-RS1JSDwVpn0kdLMBC7dUJwpsJag\"",
    "mtime": "2023-03-22T08:12:17.370Z",
    "size": 414984,
    "path": "../public/images/sustainable-tech.jpg"
  },
  "/images/waste-management-technology.jpeg": {
    "type": "image/jpeg",
    "etag": "\"37187-LxdtGyLdbek/KmMPD2phoSHzkrA\"",
    "mtime": "2023-03-22T08:12:17.366Z",
    "size": 225671,
    "path": "../public/images/waste-management-technology.jpeg"
  },
  "/_nuxt/Loading.acec9e31.js": {
    "type": "application/javascript",
    "etag": "\"45ec-O8LOle6GhNm8wHcOpXz3y7lOv8A\"",
    "mtime": "2023-03-22T08:12:17.360Z",
    "size": 17900,
    "path": "../public/_nuxt/Loading.acec9e31.js"
  },
  "/_nuxt/Model.f0d5ba95.js": {
    "type": "application/javascript",
    "etag": "\"84d-Wdzp4VeFQ12HKG9vS3f3Y0dT0Fk\"",
    "mtime": "2023-03-22T08:12:17.360Z",
    "size": 2125,
    "path": "../public/_nuxt/Model.f0d5ba95.js"
  },
  "/_nuxt/_id_.49a370ce.js": {
    "type": "application/javascript",
    "etag": "\"499-izHcy9NkFxJGMy4jjhKcDwLDLuc\"",
    "mtime": "2023-03-22T08:12:17.360Z",
    "size": 1177,
    "path": "../public/_nuxt/_id_.49a370ce.js"
  },
  "/_nuxt/_id_.58ac3832.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"227-UYTtTeZLQZwoIB2KjnzhZkPYhW4\"",
    "mtime": "2023-03-22T08:12:17.360Z",
    "size": 551,
    "path": "../public/_nuxt/_id_.58ac3832.css"
  },
  "/_nuxt/_id_.8950ceb7.js": {
    "type": "application/javascript",
    "etag": "\"4c3-iuVL93Uu1VLZdYI0uT80oMhGfUU\"",
    "mtime": "2023-03-22T08:12:17.356Z",
    "size": 1219,
    "path": "../public/_nuxt/_id_.8950ceb7.js"
  },
  "/_nuxt/_id_.d202548a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1cf-VGHDTfb67KDkC8kqMwOafquGJME\"",
    "mtime": "2023-03-22T08:12:17.356Z",
    "size": 463,
    "path": "../public/_nuxt/_id_.d202548a.css"
  },
  "/_nuxt/about.92d0f972.js": {
    "type": "application/javascript",
    "etag": "\"3891-Vbb/Yw7FxYppGh/qgV/M1PW4rCY\"",
    "mtime": "2023-03-22T08:12:17.353Z",
    "size": 14481,
    "path": "../public/_nuxt/about.92d0f972.js"
  },
  "/_nuxt/about.db15925e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c8c-5gBl/ZE7Bl/GLNU1pH46mZYg/mg\"",
    "mtime": "2023-03-22T08:12:17.350Z",
    "size": 3212,
    "path": "../public/_nuxt/about.db15925e.css"
  },
  "/_nuxt/composables.593cb570.js": {
    "type": "application/javascript",
    "etag": "\"61-NYfMp5MWiKFzdWbzlW/B3UcCBL4\"",
    "mtime": "2023-03-22T08:12:17.350Z",
    "size": 97,
    "path": "../public/_nuxt/composables.593cb570.js"
  },
  "/_nuxt/contact.1071b6ac.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e-76wM8R5xteTIQziNPcsxn/BqCEc\"",
    "mtime": "2023-03-22T08:12:17.350Z",
    "size": 126,
    "path": "../public/_nuxt/contact.1071b6ac.css"
  },
  "/_nuxt/contact.af748288.js": {
    "type": "application/javascript",
    "etag": "\"1376-PL1Bk46iVq4Csdchq7Ec0Znkyco\"",
    "mtime": "2023-03-22T08:12:17.346Z",
    "size": 4982,
    "path": "../public/_nuxt/contact.af748288.js"
  },
  "/_nuxt/default.2e457d84.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d5-PDEmAYhqfeD2genak8tNDRt3KLY\"",
    "mtime": "2023-03-22T08:12:17.346Z",
    "size": 981,
    "path": "../public/_nuxt/default.2e457d84.css"
  },
  "/_nuxt/default.5728d564.js": {
    "type": "application/javascript",
    "etag": "\"29d9-zqgeMN6y23iihHtCO5r6hvF3Kt8\"",
    "mtime": "2023-03-22T08:12:17.346Z",
    "size": 10713,
    "path": "../public/_nuxt/default.5728d564.js"
  },
  "/_nuxt/donate.3b04f47f.js": {
    "type": "application/javascript",
    "etag": "\"1970-lie+LGrxauMIh3xRx+ZK/GC63IU\"",
    "mtime": "2023-03-22T08:12:17.343Z",
    "size": 6512,
    "path": "../public/_nuxt/donate.3b04f47f.js"
  },
  "/_nuxt/donate.5d363072.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25c-HuyU0W6BqETXBPdBut8HWCxEarU\"",
    "mtime": "2023-03-22T08:12:17.343Z",
    "size": 604,
    "path": "../public/_nuxt/donate.5d363072.css"
  },
  "/_nuxt/entry.440dd346.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7cea-PLUBPmWj7cPvzEsquITRHP+eDzM\"",
    "mtime": "2023-03-22T08:12:17.343Z",
    "size": 31978,
    "path": "../public/_nuxt/entry.440dd346.css"
  },
  "/_nuxt/entry.8019bc0b.js": {
    "type": "application/javascript",
    "etag": "\"4097c-k6BLdDBsRLwopY+whz7u7xmcduY\"",
    "mtime": "2023-03-22T08:12:17.343Z",
    "size": 264572,
    "path": "../public/_nuxt/entry.8019bc0b.js"
  },
  "/_nuxt/error-component.e875b987.js": {
    "type": "application/javascript",
    "etag": "\"4d5-Xbvb859lr7v9VOtLWA5YFy6mfiE\"",
    "mtime": "2023-03-22T08:12:17.340Z",
    "size": 1237,
    "path": "../public/_nuxt/error-component.e875b987.js"
  },
  "/_nuxt/fetch.d236ad28.js": {
    "type": "application/javascript",
    "etag": "\"2bc7-9KkVP5IPZ18j0kWAsJPPk0tYr0A\"",
    "mtime": "2023-03-22T08:12:17.340Z",
    "size": 11207,
    "path": "../public/_nuxt/fetch.d236ad28.js"
  },
  "/_nuxt/index.370d52ed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-n1hkp9wTLX2P2kTJAC0OtMSRYxw\"",
    "mtime": "2023-03-22T08:12:17.340Z",
    "size": 62,
    "path": "../public/_nuxt/index.370d52ed.css"
  },
  "/_nuxt/index.64409ed9.js": {
    "type": "application/javascript",
    "etag": "\"758-QfxB5CbKSqUPpLb23qiBnNKTz6Q\"",
    "mtime": "2023-03-22T08:12:17.336Z",
    "size": 1880,
    "path": "../public/_nuxt/index.64409ed9.js"
  },
  "/_nuxt/index.655e5820.js": {
    "type": "application/javascript",
    "etag": "\"178df-WOQWVR8RNbOgPxJFs0+kUvTeSSI\"",
    "mtime": "2023-03-22T08:12:17.336Z",
    "size": 96479,
    "path": "../public/_nuxt/index.655e5820.js"
  },
  "/_nuxt/index.789b9239.js": {
    "type": "application/javascript",
    "etag": "\"d53-kipmGfXaS+lprZy07+8P4EzgY44\"",
    "mtime": "2023-03-22T08:12:17.336Z",
    "size": 3411,
    "path": "../public/_nuxt/index.789b9239.js"
  },
  "/_nuxt/index.a75087b8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"33e9-mpD2pCAcw/gG9zTo6zpEJcLfCYk\"",
    "mtime": "2023-03-22T08:12:17.333Z",
    "size": 13289,
    "path": "../public/_nuxt/index.a75087b8.css"
  },
  "/_nuxt/index.db1702aa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-uaq+2nco+zSXv15jssW5appfljg\"",
    "mtime": "2023-03-22T08:12:17.333Z",
    "size": 62,
    "path": "../public/_nuxt/index.db1702aa.css"
  },
  "/_nuxt/join.57db7a9d.js": {
    "type": "application/javascript",
    "etag": "\"14ac-W/avI3Yjo8rjAghZyJui0o5FBCw\"",
    "mtime": "2023-03-22T08:12:17.326Z",
    "size": 5292,
    "path": "../public/_nuxt/join.57db7a9d.js"
  },
  "/_nuxt/join.ec4789fe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d-l2WYosDxhwsHZULZWGsyhY/qhXM\"",
    "mtime": "2023-03-22T08:12:17.323Z",
    "size": 125,
    "path": "../public/_nuxt/join.ec4789fe.css"
  },
  "/_nuxt/policy.431fbf56.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25c-X6Wl5b/Kn7zXtI6xUiBM5pj5gMM\"",
    "mtime": "2023-03-22T08:12:17.323Z",
    "size": 604,
    "path": "../public/_nuxt/policy.431fbf56.css"
  },
  "/_nuxt/policy.da75698a.js": {
    "type": "application/javascript",
    "etag": "\"6072-H6tKwK5/pt0LhcC/6sgbNG50SfA\"",
    "mtime": "2023-03-22T08:12:17.323Z",
    "size": 24690,
    "path": "../public/_nuxt/policy.da75698a.js"
  },
  "/_nuxt/terms.3a0cbc3d.js": {
    "type": "application/javascript",
    "etag": "\"2e94-P0zAcdwUVTNFzxYlPEhUfgHvnS4\"",
    "mtime": "2023-03-22T08:12:17.320Z",
    "size": 11924,
    "path": "../public/_nuxt/terms.3a0cbc3d.js"
  },
  "/_nuxt/terms.d31f325a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"30d-pi+QpL/eJwVrusg2Hd+JXxEsOqg\"",
    "mtime": "2023-03-22T08:12:17.320Z",
    "size": 781,
    "path": "../public/_nuxt/terms.d31f325a.css"
  },
  "/_nuxt/transition.513ec82d.js": {
    "type": "application/javascript",
    "etag": "\"72e4-I1YRyvkE0EsJw3syf7CxE8w+FYI\"",
    "mtime": "2023-03-22T08:12:17.316Z",
    "size": 29412,
    "path": "../public/_nuxt/transition.513ec82d.js"
  },
  "/_nuxt/useAnimate.a164f955.js": {
    "type": "application/javascript",
    "etag": "\"e4-nmh3szM+6NICtOy1bawUuSYP34I\"",
    "mtime": "2023-03-22T08:12:17.316Z",
    "size": 228,
    "path": "../public/_nuxt/useAnimate.a164f955.js"
  },
  "/_nuxt/useVolunteer.dac376b1.js": {
    "type": "application/javascript",
    "etag": "\"ec7729-e8vieG3mkL1rlTb0Ral59jQ9G94\"",
    "mtime": "2023-03-22T08:12:17.293Z",
    "size": 15497001,
    "path": "../public/_nuxt/useVolunteer.dac376b1.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const robots = {
  "UserAgent": "*",
  "Disallow": ""
};

const _3HgppW = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  return render(await getRules(robots, event.req));
});
var Correspondence = /* @__PURE__ */ ((Correspondence2) => {
  Correspondence2[Correspondence2["User-agent"] = 0] = "User-agent";
  Correspondence2[Correspondence2["Crawl-delay"] = 1] = "Crawl-delay";
  Correspondence2[Correspondence2["Disallow"] = 2] = "Disallow";
  Correspondence2[Correspondence2["Allow"] = 3] = "Allow";
  Correspondence2[Correspondence2["Host"] = 4] = "Host";
  Correspondence2[Correspondence2["Sitemap"] = 5] = "Sitemap";
  Correspondence2[Correspondence2["Clean-param"] = 6] = "Clean-param";
  Correspondence2[Correspondence2["Comment"] = 7] = "Comment";
  Correspondence2[Correspondence2["BlankLine"] = 8] = "BlankLine";
  return Correspondence2;
})(Correspondence || {});
function render(rules) {
  return rules.map((rule) => {
    const value = String(rule.value).trim();
    switch (rule.key.toString()) {
      case Correspondence[7 /* Comment */]:
        return `# ${value}`;
      case Correspondence[8 /* BlankLine */]:
        return "";
      default:
        return `${rule.key}: ${value}`;
    }
  }).join("\n");
}
async function getRules(options, req) {
  const correspondences = {
    useragent: "User-agent",
    crawldelay: "Crawl-delay",
    disallow: "Disallow",
    allow: "Allow",
    host: "Host",
    sitemap: "Sitemap",
    cleanparam: "Clean-param",
    comment: "Comment",
    blankline: "BlankLine"
  };
  const rules = [];
  const parseRule = (rule) => {
    const parsed = {};
    for (const [key, value] of Object.entries(rule)) {
      parsed[String(key).toLowerCase().replace(/[\W_]+/g, "")] = value;
    }
    return parsed;
  };
  for (const rule of Array.isArray(options) ? options : [options]) {
    const parsed = parseRule(rule);
    const keys = Object.keys(correspondences).filter((key) => typeof parsed[key] !== "undefined");
    for (const key of keys) {
      const parsedKey = parsed[key];
      let values;
      values = typeof parsedKey === "function" ? await parsedKey(req) : parsedKey;
      values = Array.isArray(values) ? values : [values];
      for (const value of values) {
        const v = typeof value === "function" ? await value(req) : value;
        if (v === false) {
          continue;
        }
        rules.push({
          key: correspondences[key],
          value: v
        });
      }
    }
  }
  return rules;
}

const _lazy_8MjPAb = () => import('../index.get.mjs');
const _lazy_Bx7m9z = () => import('../create.post.mjs');
const _lazy_f1P5d5 = () => import('../_id_.put.mjs');
const _lazy_PN4N3o = () => import('../index.get2.mjs');
const _lazy_Yu3AJm = () => import('../create.post2.mjs');
const _lazy_qYigHe = () => import('../_id_.get.mjs');
const _lazy_SrG0Vs = () => import('../index.get3.mjs');
const _lazy_oFuV7H = () => import('../create.post3.mjs');
const _lazy_I12DMi = () => import('../_id_.put2.mjs');
const _lazy_e4Rwg1 = () => import('../index.get4.mjs');
const _lazy_AQnMVC = () => import('../create.post4.mjs');
const _lazy_OeJOUI = () => import('../_id_.get2.mjs');
const _lazy_9AhYaI = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/volunteers', handler: _lazy_8MjPAb, lazy: true, middleware: false, method: "get" },
  { route: '/api/volunteers/create', handler: _lazy_Bx7m9z, lazy: true, middleware: false, method: "post" },
  { route: '/api/volunteers/:id', handler: _lazy_f1P5d5, lazy: true, middleware: false, method: "put" },
  { route: '/api/gallery', handler: _lazy_PN4N3o, lazy: true, middleware: false, method: "get" },
  { route: '/api/gallery/create', handler: _lazy_Yu3AJm, lazy: true, middleware: false, method: "post" },
  { route: '/api/gallery/:id', handler: _lazy_qYigHe, lazy: true, middleware: false, method: "get" },
  { route: '/api/doner', handler: _lazy_SrG0Vs, lazy: true, middleware: false, method: "get" },
  { route: '/api/doner/create', handler: _lazy_oFuV7H, lazy: true, middleware: false, method: "post" },
  { route: '/api/doner/:id', handler: _lazy_I12DMi, lazy: true, middleware: false, method: "put" },
  { route: '/api/campaign', handler: _lazy_e4Rwg1, lazy: true, middleware: false, method: "get" },
  { route: '/api/campaign/create', handler: _lazy_AQnMVC, lazy: true, middleware: false, method: "post" },
  { route: '/api/campaign/:id', handler: _lazy_OeJOUI, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_9AhYaI, lazy: true, middleware: false, method: undefined },
  { route: '/robots.txt', handler: _3HgppW, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_9AhYaI, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map

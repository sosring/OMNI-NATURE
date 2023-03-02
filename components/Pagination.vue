<template>

<div class="my-6 text-right">

	<nav aria-label="Page navigation example">
		<ul class="inline-flex">
			<li>
				<button 
          :disabled="page <= 1"
          :class="{ 'disabled-btn': page <= 1 }"
          type="button"
          @click="previous"
			  	class="bg-white border border-gray-300 
          text-gray-500 hover:bg-gray-100 
          hover:text-gray-700 ml-0 rounded-l-lg 
          leading-tight  px-3 h-10">
            Previous
        </button>
			</li>
			<li>
				<p type="button"
					class="border border-gray-300 
          h-10 py-2 px-3 bg-blue-50 
          hover:bg-blue-100 text-blue-700">
          {{page}}
         </p>
			</li>
			<li>
				<button type="button"
          @click="next"
          :disabled="skip > max"
          :class="{'disabled-btn': skip > max}"
					class="bg-white border border-gray-300 
          text-gray-500 hover:bg-gray-100 
          hover:text-gray-700 rounded-r-lg 
          leading-tight h-10 px-3">
          Next
        </button>
			</li>
		</ul>
	</nav>
</div>
</template>

<script setup>
  const props = defineProps({
    page: {
      type: Number
    },
    max: {
      type: Number
    },
    skip: {
      type: Number
    },
    next: {
      type: Function
    },
    previous: {
      type: Function
    }
  });
</script>

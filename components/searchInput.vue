<template>
  <div class="relative r-0">
    <form @submit.prevent="handleSubmit" class="relative">
      <input
        type="text"
        class="in h-12 w-full bg-black/50 rounded-full outline-none px-4 placeholder:text-neutral-600 text-white"
        placeholder="Search..."
        v-model="query"
      />
      <button
        type="submit"
        class="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition hover:bg-gradient-to-b hover:from-violet-700 hover:to-purple-600 hover:shadow-[0px_0px_12px_0px_rgba(170,0,255,1.00)] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 36 37"
        >
          <path
            d="M33.2 36.5L20.6 23.9C19.6 24.7 18.45 25.3333 17.15 25.8C15.85 26.2667 14.4667 26.5 13 26.5C9.36667 26.5 6.292 25.2413 3.776 22.724C1.26 20.2067 0.00133439 17.132 1.0582e-06 13.5C-0.00133228 9.868 1.25733 6.79333 3.776 4.276C6.29467 1.75867 9.36933 0.5 13 0.5C16.6307 0.5 19.706 1.75867 22.226 4.276C24.746 6.79333 26.004 9.868 26 13.5C26 14.9667 25.7667 16.35 25.3 17.65C24.8333 18.95 24.2 20.1 23.4 21.1L36 33.7L33.2 36.5ZM13 22.5C15.5 22.5 17.6253 21.6253 19.376 19.876C21.1267 18.1267 22.0013 16.0013 22 13.5C21.9987 10.9987 21.124 8.874 19.376 7.126C17.628 5.378 15.5027 4.50267 13 4.5C10.4973 4.49733 8.37267 5.37267 6.626 7.126C4.87933 8.87933 4.004 11.004 4 13.5C3.996 15.996 4.87133 18.1213 6.626 19.876C8.38067 21.6307 10.5053 22.5053 13 22.5Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "search"]);

const query = ref(props.modelValue);

const handleSubmit = () => {
  if (query.value.trim()) {
    emit("update:modelValue", query.value.trim());
    emit("search", query.value.trim());
    router.push(`/search?query=${encodeURIComponent(query.value.trim())}`);
  }
};

onMounted(() => {
  query.value = props.modelValue;
});
</script>

<style scoped>
.in {
  font-family: "IBM Plex Mono";
}
</style>

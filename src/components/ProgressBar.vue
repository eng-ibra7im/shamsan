<template>
    <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
</template>

<script>
export default {
    name: "ProgressBar",
    data() {
        return {
            progressBarWidth: "0%",
        };
    },
    mounted() {
        window.addEventListener("scroll", this.updateProgressBar);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.updateProgressBar);
    },
    methods: {
        updateProgressBar() {
            const pageHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const progressBarPercentage = (scrollPosition / pageHeight) * 100;
            this.progressBarWidth = `${progressBarPercentage}%`;
        },
    },
};
</script>

<style scoped>
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: .3rem;
    background-color: var(--accent-200);
    width: 0%;
    z-index: 9999;
}
</style>

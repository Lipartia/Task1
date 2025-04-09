const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "",
            age: 25,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybQ9296S3HQxCEmN2B7gK4a2H5hlUCBYKIA&s"
        };
    },
    computed: {
        ageIn5Years() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random().toFixed(2);
        }
    }
}).mount("#app");
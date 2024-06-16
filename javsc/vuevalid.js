const { createApp } = Vue;

        createApp({
          data() {
            return {
              fname: "",
              lname: "",
              email: "",
              message: "",
              errors: [],
            };
          },
          methods: {
            checkForm() {
              this.errors = [];

              if (!this.fname) {
                this.errors.push("Name required V.");
              }
              if (!this.lname) {
                this.errors.push("Name required V.");
              }
              if (!this.email) {
                this.errors.push("Email required V.");
              } else if (!this.validEmail(this.email)) {
                this.errors.push("Valid email required V.");
              }
              if (!this.message) {
                this.errors.push("Message required V.");
              }

              return !this.errors.length;
            },
            validEmail(email) {
              const re =
                /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
            },
            handleSubmit() {
              if (this.checkForm()) {
                // Form is valid, submit it
                this.$refs.form.submit();
              }
            },
            handleButtonClick() {
              if (this.checkForm()) {
                // Form is valid, submit it
                this.$refs.form.submit();
              } else {
                alert("Form is invalid from Vue ");
              }
            },
          },
        }).mount("#app");
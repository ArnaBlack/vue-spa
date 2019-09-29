<template>
  <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    label="email"
                    name="email"
                    type="email"
                    :rules="emailRules"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    :counter="6"
                    v-model="password"
                    :rules="passwordRules"
                  ></v-text-field>
                  <v-text-field
                    id="confirm_password"
                    label="confirm Password"
                    name="confirm_password"
                    type="password"
                    :counter="6"
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn 
                    color="primary"
                    @click="onSubmit"
                    :disabled="!valid">
                    Create account
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>
<script>
const emailRegex = /.+@.+\..+/;
export default {
  data() {
    return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
            v => !!v || 'E-mail is required',
            v => emailRegex.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
        v => !!v || 'Pass is required',
        v => (v && v.length >= 6) || 'Pass must be more than 6 characters',
      ],
      confirmPasswordRules: [
        v => !!v || 'Pass is required',
        v => v === this.password || 'Pass shoud be match',
      ],
    }
  },

  methods: {
      onSubmit() {
          if(this.$refs.form.validate()) {
              const user = {
                  email: this.email,
                  password: this.password
              };
              this.$store.dispatch('registerUser', user);
          }

      }
  }
}
</script>
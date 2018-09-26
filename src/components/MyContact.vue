<template>
  <section id="contact">
    <h2 class="subtitle">Contact</h2>

    <b-field label="お名前">
      <b-input v-model="contactForm.name" icon="account" maxlength="50" placeholder="名前を入力してください"></b-input>
    </b-field>

    <b-field label="メールアドレス">
      <b-input v-model="contactForm.email" type="email" icon="email" maxlength="100" placeholder="メールアドレスを入力してください"></b-input>
    </b-field>

    <b-field label="お問い合わせ内容">
      <b-input v-model="contactForm.content" type="textarea" placeholder="お問合せ内容を入力してください"></b-input>
    </b-field>

    <div class="field">
      <div class="control has-text-centered">
        <button class="button is-link is-rounded is-medium" @click="sendMail">
          <span class="icon"><i class="fas fa-envelope"></i></span>
          <span>送信</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: "MyContact",
    data() {
      return {
        contactForm: {
          name: "",
          email:"",
          content:""
        }
      }
    },
    methods: {
      sendMail: function () {
        if (this.contactForm.name != '' || this.contactForm.email != '' || this.contactForm.content != '') {
          const dbRefContact = this.$firebase.database().ref().child('contact').push(
            {
              name: this.contactForm.name,
              email: this.contactForm.email,
              content: this.contactForm.content
            }
          );
          this.contactForm.name = '';
          this.contactForm.email = '';
          this.contactForm.content = '';
          this.$toast.open({
            message: '送信しました',
            type: 'is-success'
          })
          return
        }
        this.$toast.open({
          message: `送信に失敗しました`,
          type: 'is-danger'
        })



        // dbRefContact.on('value', snap => {
        //   console.log(JSON.stringify(snap.val(), null, 3));
        // });


        // const dbRefContact = firebase.database().ref().child('contact')
        //   .set({name:this.name}, {email:this.email}, {content: this.content});
        // console.log(dbRefContact);

        // var newNoteKey = firebase.database().ref().child('notes').push().key;
        // firebase
        //   .database()
        //   .ref('notes/' + this.user.uid + '/' + newNoteKey)
        //   .set({name:this.name}, {email:this.email}, {content: this.content});

        // const sendMail = ff.httpsCallable('sendMail')
        // let parent = this;
        // sendResults({destination: 'hoge@hoge.com'}).then(function (result) {
        //   parent.snackbar = true
        // })



        // const sendMail = firebase.httpsCallable('sendMail')
        // let parent = this
        // sendResults({destination: 't04.ty0425aws@gmail.com'}).then(function (result) {
        //   parent.snackbar = true
        // })
      }
    }
  }
</script>

<style scoped>

</style>

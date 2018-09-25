<template>
  <section id="contact">
    <h2 class="subtitle">Contact</h2>
    <div class="field">
      <label class="label">氏名</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" v-model="name" placeholder="名前を入力してください" required>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" :class="{'is-danger': isEmailValidation}"
               v-model="email" type="email"
               placeholder="メールアドレスを入力してください" required>
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
      </div>
      <p v-if="isEmailValidation" class="help is-danger">メールアドレスの形式が正しくないです</p>
    </div>

    <div class="field">
      <label class="label">お問い合わせ内容</label>
      <div class="control">
        <textarea class="textarea" v-model="content" placeholder="お問合せ内容を入力してください"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="sendMail">送信</button>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
        name: "MyContact",
        data() {
          return {
            name: "",
            email:"",
            content:"",
            isEmailValidation: false,
          }
        },
        methods: {
          checkEmailAddress: function (str) {
            if (str === '') {
              this.isEmailValidation = !this.isEmailValidation;
            }
          },
          sendMail: function () {
            const dbRefContact = this.$firebase.database().ref().child('contact').push(
              {
                name: this.name,
                email: this.email,
                content: this.content
              });
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

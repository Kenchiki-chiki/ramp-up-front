<template>
  <div>
    <AppNavigation/>

    <div class="layout row wrap align-center">
      <v-flex xs12 sm4 px-3>
          <div class="about-thumb text-xs-center mb-4">
            <v-img
              src="https://images.unsplash.com/photo-1533619771522-a3a9e28a75df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cnVnZ2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              aspect-ratio="1"
            ></v-img>
          </div>
        </v-flex>

        <v-flex xs12 sm4 px-3>
          <div class="about-thumb text-xs-center mb-4 nuxt-rails-img">
            <v-img
              src="https://images.unsplash.com/photo-1511075496994-5298164dae11?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY5fHxyZWQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              aspect-ratio="1"
            ></v-img>
          </div>
        </v-flex>

        <v-flex xs12 sm4 px-3>
          <div class="about-thumb text-xs-center mb-4">
            <v-img
              src="https://images.unsplash.com/photo-1525982567065-4d879ca11468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzUzfHxyZWQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              aspect-ratio="1"
            ></v-img>
          </div>
        </v-flex>


    </div>


    <div class="layout row wrap align-center">

      <v-flex xs-12 sm4 px-3>
          <div class="section-head">
            <h2 class="section-title">Origin</h2>
            <div
              class="section-meta"
            >
            “Ramp Up”には“英語で坂道やスロープを駆け上がる”、“独り立ちする”、“強化する”という意味があります。<br>
            夢に向かって学習を継続することは時に困難となることもあるかと思います。<br>
            坂道のように険しい道のりかもしれません。<br>
            しかし、継続した先にはまだ見ぬ素晴らしい景色が待っているのではないでしょうか。<br>
            そのような道を駆け上がっていくお手伝いができれば、そんな思いを込めて、“Ramp Up”と名付けました。</div>
          </div>

          <div
            class="section-body"
          >
          </div>
          
        </v-flex>

        <v-flex xs-12 sm4 px-3>
          <div class="section-head">
            <h2 class="section-title">Concept</h2>
            <div
              class="section-meta"
            >
            “ユーザーがより快適に使える”がRamp Upのコンセプトです。<br>
            フロントエンドとバックエンドを切り離し、完全SPA化を実現しました。<br>
            Nuxt.jsとRails APIの2つのアプリを使用して、実装しています。<br>
            コンセプトに沿った実装をするために実現したいことは、まだまだたくさんあります。<br>
            今後はAWSへのデプロイやデザイン、機能の修正を行い、よりユーザーにとって使いやすいアプリの実現に取り組みます。<br><br></div>
          </div>

          <div
            class="section-body"
          >
          </div>
          
        </v-flex>

        <v-flex xs-12 sm4 px-3>
          <div class="section-head">
            <h2 class="section-title">Author</h2>
            <div
              class="section-meta"
            >
            ケンチキと申します。<br>
            公務員として働いていましたが、プログラミングに出会い、その魅力に引き込まれて、気づけばプログラマーへの転職を目指していました。<br>
            作りたいサービスの実現に向けて、タスクを実現するための実装方針を考え、ロジックをコードに反映し、上手くいかない箇所は何度もデバッグして改善する。<br>
            この過程が楽しくて、毎日アプリの開発に取り組んでいます。<br>
            2020年の12月末をもって前職を退職し、現在転職活動中です。</div>
          </div>

          <div
            class="section-body"
          >
          </div>
          
        </v-flex>
    </div>

  </div>
    
  
</template>
<script>
import AppNavigation from "~/components/AppNavigation";

export default {
  name: "About",
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/build');
    }
  },
  components: {
    AppNavigation
  }
};
</script>

<style>
.nuxt-rails-img {
  opacity: 0.8;
}
</style>
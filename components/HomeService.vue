<template>
  <v-container class="service bg-light section text-xs-center">
    <div class="section-head">
      <h2 class="section-title">Feature</h2>
      <!-- <div
        class="section-meta"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum exercitationem dignissimos animi similique, eveniet voluptates.</div> -->
    </div>

    <v-layout wrap justify-center>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-bullhorn</v-icon>
          </div>

          <h4 id="service-title">スキル設定</h4>

          <div
            class="service-body"
          >これから伸ばしていきたいと思っているスキルを設定できます。学ぶべきことを明確にし、言語化することから始めましょう。</div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-code</v-icon>
          </div>

          <h4 id="service-title">学習記録</h4>

          <div
            class="service-body"
          >設定したスキルに対して、その日の学習時間を記録できます。毎日少しずつ記録することを通じて、学習を習慣化していきましょう。</div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-tasks</v-icon>
          </div>

          <h4 id="service-title">タスクの書き出し</h4>

          <div
            class="service-body"
          >翌日のタスクなどを気軽に書き込むことができます。学習に取りかかる際にはまずやるべきことを確認し、一つずつ取り組んでいきましょう。</div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-calendar-alt</v-icon>
          </div>

          <h4 id="service-title">カレンダー</h4>

          <div
            class="service-body"
          >毎日の学習時間をすぐに確認できます。学習時間に応じて各日に色付けされるため、その月の学習状況が一目でわかります。</div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-chart-pie</v-icon>
          </div>

          <h4 id="service-title">チャート</h4>

          <div
            class="service-body"
          >２種類のグラフにより、学習状況を把握できます。棒グラフと円グラフを活用し、月別の学習時間やスキル別の学習時間を確認することができます。</div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-edit</v-icon>
          </div>

          <h4 id="service-title">スキル編集</h4>

          <div
            class="service-body"
          >スキルの追加や削除ができます。新たに伸ばしていきたいスキルを設定したいときや不要なスキルを整理したいときなど、必要に応じて活用してください。</div>
        </div>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  name: "HomeService"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.service-item {
  background: #fff;
  padding: 20px 10px 20px;
  margin-bottom: 15px;
  box-shadow: -1px 12px 25px rgba(119, 119, 119, 0.2);
}

.service-ico {
  height: 70px;
  margin: 0 auto 20px;
  font-size: 4rem;
}

#service-title {
  font-size: 1.125rem;
  text-transform: uppercase;
  margin: 0 0 15px;
  color: #000000;
}

.service-body {
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 300;
  color: #777;
}
</style>
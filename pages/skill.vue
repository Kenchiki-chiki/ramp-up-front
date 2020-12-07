<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5 skill-form">
      <v-card-title>
        <h1 class="display-1">
          スキルを設定しましょう。
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>

          <v-row>

        <v-col
          cols="4"
        >
          <v-text-field
            label="スキル 1"
            placeholder="(例)Vue"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            label="スキル 2"
            placeholder="(例)React"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            label="スキル 3"
            placeholder="(例)Angular"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            label="スキル 4"
            placeholder="(例)Rails"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            label="スキル 5"
            placeholder="(例)AWS"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            label="スキル 6"
            placeholder="(例)英語"
            filled
          ></v-text-field>
        </v-col>
          </v-row>
          
          
          
          <v-card-actions>
            <v-btn
              color="#666666"
              class="white--text"
            >
              設定完了
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<style>

</style>
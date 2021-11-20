<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered
    height = "300px">
      <q-card-section horizontal>
        <q-card-section>
        </q-card-section>

        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
        </q-card-section>

        <q-separator vertical />

        <q-card-section>
            Testing
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.quasar.dev/img/mountains.jpg"
        />

        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

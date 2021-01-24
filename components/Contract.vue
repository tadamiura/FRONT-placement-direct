<template>
  <div>
    <div>
      <b-card :header="title" class="text-center">
        <b-card-text>
            le lien : {{ description }}
        </b-card-text>
      <hr />
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
    name: "contract",
    props: ["title", "description"]
}
</script>

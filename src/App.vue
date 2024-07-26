<script setup>
import FileUpload from 'primevue/fileupload'
import axios from 'axios'
async function customUploader(event) {
  const file0 = event.files[0]
  console.log('uploading ', file0.name)
  const promise = new Promise(function (resolve, reject) {
    var reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
    reader.readAsDataURL(file0)
  })
  const value = await promise
  console.log(value)
  await axios({
    method: 'post',
    url: '/api/upload',
    headers: {
      'Content-Type': 'application/json'
    },
    data: value
  })
}
</script>

<template>
  <header>
    <div class="wrapper"><h1>Embed Security</h1></div>
  </header>

  <main>
    <div>
      <FileUpload
        ref="fileupload"
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        :auto="true"
        :maxFileSize="1000000"
        customUpload
        @uploader="customUploader"
      />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

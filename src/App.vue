<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'App'
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial';
    }

    :root {
        --light-blue: #e0e0e0;
        --outer-shadow: #bebebe;
        --inner-shadow: #ffffff;
        --bold-font: #5A6366;
        --light-font: #97a7ae;

        background-color: var(--light-blue);
    }

    h1 {
        text-align: center;
        font-size: 42px;
    }

    .btn {
        text-decoration: none;
        cursor: pointer;
        border: 1px solid #d1d1d1;
        min-width: 100px;
        width: 100%;
        border-radius: 50px;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        margin: 10px auto;
        height: 50px;
        font-size: 16px;
        color: var(--bold-font);
        line-height: 50px;
        font-size: 14px;
        text-align: center;
    }

    .title {
        text-align: center;
        background: none;
        outline: none;
        cursor: pointer;
        border: none;
        text-decoration: underline;
        font-size: 30px;
        color: var(--bold-font);
    }

    @media only screen and (min-width: 1024px) {
        body {
            padding: 0 20%;
        }
    }
</style>

<template>
  <div class="forms-container">
    <h2>Student Registration</h2>
    <div class="forms-nav">
      <div class="navs n1">
        <button>Personal Information</button>
      </div>
      <div class="navs n2">
        <button>Academic Information</button>
      </div>
      <div class="navs n3">
        <button>Review</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveForms",
};
</script>

<style lang="css" scoped>
.forms-container {
  margin: 40px auto;
}

.forms-nav {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .navs {
    flex-grow: 1;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    border: 2px solid #dfdfdf;
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      text-decoration: underline;
      font-size: 15px;
    }
  }

  .active {
    background-color: rgb(243, 133, 43);
    button {
      color: white;
      font-weight: bold;
    }
  }

  .navs:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .navs:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
</style>
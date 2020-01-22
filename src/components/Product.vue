<template>
  <div class="product">
    <div class="product__main">
      <div class="product-main">
        <div class="product-main__img">
          <div class="product-img">
            <img class="product-img__item" :src="data.img" alt="">
          </div>
        </div>
        <p class="product-main__txt">
          <span class="product-name">{{ data.name }}</span>
        </p>
        <p class="product-main__txt">
          <span class="product-price">{{ data.price }}</span>
        </p>
      </div>
    </div>
    <div class="product__footer">
      <Button @click="addToCart()">add to cart</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Button from './Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Product extends Vue {
  @Prop() private data!: {
    img: string,
    name: string,
    price: string
  }

  addToCart () {
    console.log(`addToCart ${this.data.name} for ${this.data.price}`)
  }
}
</script>

<style lang="scss" scoped>
  .product {
    font-size: 0;

    &__main {
      border: 2px solid #f9f9f9;
      border-bottom: 1px solid transparent;
      margin-bottom: -1px;
    }

    // &__footer {}

    &-main {
      &__img {
        margin: 8px;
      }

      &__txt {
        margin: 5px 15px;

        &:first-of-type {
          margin-top: 10px;
        }

        &:last-of-type {
          margin-bottom: 10px;
        }
      }
    }

    &-img {
      height: 115px;

      &__item {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-name {
      font-size: 12px;
      font-weight: 300;
      line-height: 15px;
    }

    &-price {
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
    }
  }
</style>

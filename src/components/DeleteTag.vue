<template>
  <div class="delete" @click="deleteItem"></div>
</template>

<script>
export default {
  name: "DeleteItem",
	props:{
		tag:{
			require: true,
			default: null
		},
		id: {
			require: true
		},
	},
  data() {
    return {};
  },
  methods: {
		deleteItem() {
			this.$emit('deleteItem', this.tag, this.id);
		}
	}
};
</script>

<style scoped lang="scss">
.delete {
  position: absolute;
  top: -7px;
  right: -2px;
  width: 14px;
  height: 14px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 7px;
    height: 1px;
    background-color: black;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 7px;
    height: 1px;
    background-color: black;
  }
}
</style>

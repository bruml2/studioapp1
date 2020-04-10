<!--  <Modal :modalopen="modalIsOpen" @closeModal="modalIsOpen=false" v-html>
        <span class="modal-title">This is <em>italic</em>!</span>
      </Modal>
      css for everything in the slot goes in parent -->
<!--  from https://codepen.io/udyux/pen/EwwPgr -->
<!-- a click within modal__content will not emit the closeModal event because it's stopped
     from reaching translucent-overlay where the handler is. If there is a link in the 
     content, then a handler must be attached to it (see original) -->
<template>
  <div>
    <transition name="modalFade">
      <section v-if="modalopen" class="translucent-overlay" @click="$emit('closeModal')">
        <article class="modal-window" @click.stop>
          <button class="modal-closeBtn" @click="$emit('closeModal')">&times;</button>
          <slot></slot>
        </article>
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    props: { modalopen: Boolean },
  }
</script>

<style scoped>
.translucent-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 1;
}
.modalFade-enter-active, 
.modalFade-leave-active {
  transition: opacity 350ms;
}
.modalFade-enter, 
.modalFade-leave-to {
  opacity: 0;
}
.modalFade-leave, 
.modalFade-enter-to {
  opacity: 1;
}
.modal-window {
  position: relative;
  width: 90%;
  max-width: 500px;
  min-height: 250px;
  padding: 1.5rem 1rem;
  background-color: white;
  border: 1px solid #c5d0d1;
  border-radius: 12px;
  box-shadow: 0 0.5rem 1.75rem -0.25rem rgba(61, 83, 88, 0.4);
}
.modal-closeBtn {
  position: absolute;
  top: 0.25rem;
  right: 1rem;
  font-size: 1.75rem;
  font-weight: 700;
  opacity: 0.5;
  transition: opacity 150ms ease-out;
}
.modal-closeBtn:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
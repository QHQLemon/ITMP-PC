<template>
  <div class="vue_edit_container">
    <quill-editor
      v-model="myText"
      ref="myEdit"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  props: ['editText'],
  data() {
    return {
      myText: this.editText,
      editorOption: {
        modules: {
          toolbar: [
            // [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "+1" }, { align: [] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote"],
            // [{ color: [] }, { background: [] }],
            ['image']
          ]
        }
      }
    };
  },
  components: {
    quillEditor
  },
  watch: {
    editText(){
      this.myText = this.editText;
    }

  },
  methods: {
    onEditorReady(editor) {},
    onEditorBlur() {

    },
    onEditorFocus() {},
    onEditorChange() {
      this.$emit('submitText', this.myText)
    }
  },
  computed: {
    editor() {
      return this.$refs.myEdit.quill;
    }
  }
};
</script >

<style scoped>
</style>

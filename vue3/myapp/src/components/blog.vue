<template>
  <div class="blogpost" :class="{highlighted: post.highlighted}">
    <h2>{{post.title}}</h2>
    <p>{{post}}</p>
    <p class="meta">written by {{ post.author }} on {{ date }}</p>
    <p v-if="post.highlighted">This post is highlighted!</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  highlighted?: boolean;
}

@Component
export default class BlogPost extends Vue {
  @Prop() private post!: Post

  get date() {
    return `${this.post.datePosted.getFullYear()}/${this.post.datePosted.getMonth() + 1}/${this.post.datePosted.getDate()}`;
  }
}
</script>

<style scoped lang="stylus">
.blogpost
  &.highlighted
    border 1px solid #f4d942
    background #fff3b2
  h2
    text-decoration underline
  .meta
    font-style italic
</style>

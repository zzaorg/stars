<template>
  <blockquote>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </blockquote>
</template>


<style scoped>
blockquote {
  background: #f9f9f9;
  border-right: 10px solid #ccc;
  margin: 1em 0px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-left: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>
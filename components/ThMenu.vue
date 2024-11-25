<template>
  <div class="text-center">
    <v-menu :location>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">Dropdown</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-menu activator="parent" open-on-hover submenu>
            <v-list>
              <v-list-item v-for="subItem in item.subItems" :key="subItem.title" link>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
type Anchor = 'top' | 'bottom' | 'start' | 'end' | 'center';

type Props = {
  items: Array<{
    title: string;
    subItems: Array<{ title: string; }>;
  }>;
  location: Anchor;
};

const { items, location } = defineProps<Props>();
</script>

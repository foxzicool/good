<template>
  <div class="text-center">
    <v-menu :location="location">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          {{ buttonLabel }}
          <ThIcon v-if="icon" :icon="icon" />
        </v-btn>
      </template>
      <v-list>
        <template v-for="item in items" :key="item.title">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <template v-if="!item.subItems || item.subItems.length === 0">
                  <NuxtLink :to="item.to" :target="item.external ? '_blank' : '_self'">{{ item.title }}</NuxtLink>
                </template>
                <template v-else>
                  {{ item.title }}
                </template>
              </v-list-item-title>
            </v-list-item-content>
            <template #append>
              <ThIcon v-if="item.subItems?.length && item.icon" :icon="item.icon" />
            </template>
            <v-menu v-if="item.subItems?.length" open-on-hover activator="parent" submenu>
              <v-list>
                <template v-for="subItem in item.subItems" :key="subItem.title">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <template v-if="!subItem.subItems || subItem.subItems.length === 0">
                          <NuxtLink :to="subItem.to" :target="subItem.external ? '_blank' : '_self'">{{ subItem.title }}</NuxtLink>
                        </template>
                        <template v-else>
                          {{ subItem.title }}
                        </template>
                      </v-list-item-title>
                    </v-list-item-content>
                    <template #append>
                      <!-- 确保 :icon 的值正确传递 -->
                      <ThIcon v-if="subItem.subItems?.length && subItem.icon" :icon="subItem.icon" />
                    </template>
                    <v-menu v-if="subItem.subItems?.length" open-on-hover activator="parent" submenu>
                      <v-list>
                        <template v-for="subSubItem in subItem.subItems" :key="subSubItem.title">
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>
                                <template v-if="!subSubItem.subItems || subSubItem.subItems.length === 0">
                                  <NuxtLink :to="subSubItem.to" :target="subSubItem.external ? '_blank' : '_self'">{{ subSubItem.title }}</NuxtLink>
                                </template>
                                <template v-else>
                                  {{ subSubItem.title }}
                                </template>
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-list>
                    </v-menu>
                  </v-list-item>
                </template>
              </v-list>
            </v-menu>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import ThIcon from '~/components/icon';

type IconName = 'arrow_right' | 'dropdown' | 'menu';
type Anchor = 'top' | 'bottom' | 'start' | 'end' | 'center';
interface MenuItem {
  title: string;        
  to?: string;         
  external?: boolean;  
  icon?: IconName;  
  subItems?: MenuItem[]; 
}
type Props = { items: MenuItem[]; location: Anchor; buttonLabel: string; icon?: IconName; };
const { items, location, buttonLabel, icon } = defineProps<Props>();
</script>

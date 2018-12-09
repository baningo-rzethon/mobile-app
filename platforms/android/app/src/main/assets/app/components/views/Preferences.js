const App = require('./../App');
const UserBarCode = require('./../parts/UserBarCode');

module.exports = {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Gastronomia',
                    things: [
                        {
                            id: 1,
                            name: 'Sałatka',
                            category: 1,
                            tak: false,
                        },
                        {
                            id: 2,
                            name: 'Kebab',
                            category: 1,
                            tak: false,
                        },
                        {
                            id: 3,
                            name: 'Pizza',
                            category: 1,
                            tak: false,
                        },
                        {
                            id: 4,
                            name: 'Burgery',
                            category: 1,
                            tak: false,
                        },
                        {
                            id: 5,
                            name: 'Domowe',
                            category: 1,
                            tak: false,
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Zwiedzanie',
                    things: [
                        {
                            id: 6,
                            name: 'Stare budowle',
                            category: 2,
                            tak: false,
                        },
                        {
                            id: 7,
                            name: 'Budynki miasta',
                            category: 2,
                            tak: false,
                        },
                        {
                            id: 8,
                            name: 'Parki',
                            category: 2,
                            tak: false,
                        },
                        {
                            id: 9,
                            name: 'Pomniki',
                            category: 2,
                            tak: false,
                        },
                        {
                            id: 10,
                            name: 'Muzea',
                            category: 2,
                            tak: false,
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Rozrywka',
                    things: [
                        {
                            id: 11,
                            name: 'Kluby',
                            category: 3,
                            tak: false,
                        },
                        {
                            id: 12,
                            name: 'Puby',
                            category: 3,
                            tak: false,
                        },
                        {
                            id: 13,
                            name: 'Kawiarnie',
                            category: 3,
                            tak: false,
                        },
                        {
                            id: 14,
                            name: 'Kina',
                            category: 3,
                            tak: false,
                        },
                        {
                            id: 15,
                            name: 'Teatry',
                            category: 3,
                            tak: false,
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Zakupy',
                    things: [
                        {
                            id: 16,
                            name: 'Galeria',
                            category: 4,
                            tak: false,
                        },
                        {
                            id: 17,
                            name: 'Centra handlowe',
                            category: 4,
                            tak: false,
                        },
                        {
                            id: 18,
                            name: 'Hipermarkety',
                            category: 4,
                            tak: false,
                        },
                        {
                            id: 19,
                            name: 'Spożywcze',
                            category: 4,
                            tak: false,
                        },
                        {
                            id: 20,
                            name: 'Monopolowe',
                            category: 4,
                            tak: false,
                        },
                    ]
                },
            ],
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="RzeTour">
        <GridLayout columns="50, auto, *, auto, auto" rows="auto">
           <Image src="~/images/iconStar.svg.png" height="40" row="0" col="0" />
           <Label text="Preferencje" fontSize="24" row="0" col="1"/>
           <Image src="~/images/iconGears.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="3" />
           <Image @tap="showBarCode()" src="~/images/iconBarCodes1.svg.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="4" />
        </GridLayout>
      </ActionBar>

        <TabView>
          <TabViewItem :title="categories[0].name">
            <GridLayout columns="*" rows="*">
                <ListView for="thing in categories[0].things" row="0" col="0">
                  <v-template>
                    <GridLayout columns="*, *" rows="60">
                      <Label :text="thing.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />
                      <Switch v-model="thing.tak" row="0" col="1" class="m-r-20"/>
                    </GridLayout>
                  </v-template>
                </ListView>
            </GridLayout>
          </TabViewItem>
          <TabViewItem :title="categories[1].name">
            <GridLayout columns="*" rows="*">
                <ListView for="thing in categories[1].things" row="0" col="0">
                  <v-template>
                    <GridLayout columns="*, *" rows="60">
                      <Label :text="thing.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />
                      <Switch v-model="thing.tak" row="0" col="1" class="m-r-20"/>
                    </GridLayout>
                  </v-template>
                </ListView>
            </GridLayout>
          </TabViewItem>
          <TabViewItem :title="categories[2].name">
            <GridLayout columns="*" rows="*">
                <ListView for="thing in categories[2].things" row="0" col="0">
                  <v-template>
                    <GridLayout columns="*, *" rows="60">
                      <Label :text="thing.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />
                      <Switch v-model="thing.tak" row="0" col="1" class="m-r-20"/>
                    </GridLayout>
                  </v-template>
                </ListView>
            </GridLayout>
          </TabViewItem>
          <TabViewItem :title="categories[3].name">
            <GridLayout columns="*" rows="*">
                <ListView for="thing in categories[3].things" row="0" col="0">
                  <v-template>
                    <GridLayout columns="*, *" rows="60">
                      <Label :text="thing.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />
                      <Switch v-model="thing.tak" row="0" col="1" class="m-r-20"/>
                    </GridLayout>
                  </v-template>
                </ListView>
            </GridLayout>
          </TabViewItem>
        </TabView>
      
      <!--<ScrollView>-->
        <!--<StackLayout>-->
        <!--<Label :text="categories[0].name" class="m-l-20"/>-->
        <!--<ListView for="thing in categories[0].things">-->
          <!--<v-template>-->
            <!--<GridLayout columns="*, *" rows="60">-->
              <!--<Label :text="thing.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />-->
              <!--<Switch v-model="thing.tak" row="0" col="1" class="m-r-20"/>-->
            <!--</GridLayout>-->
          <!--</v-template>-->
        <!--</ListView>-->
        <!--<Label :text="categories[2].name" class="m-l-20/>-->
        <!--<ListView for="thing in categories[2].things">-->
          <!--<v-template>-->
            <!--<GridLayout columns="*, *" rows="60">-->
              <!--<Label :text="thing.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />-->
              <!--<Switch v-model="thing.tak" row="0" col="1" class="m-r-20"/>-->
            <!--</GridLayout>-->
          <!--</v-template>-->
        <!--</ListView>-->
        <!--</StackLayout>-->
      <!--</ScrollView>-->
    </Page>
  `,
    mounted() {
        // httpModule.getJSON("https://rzethon.shymi.eu/things").then((result) => {
        //     console.log(result);
        // }, (e) => {
        //     console.log(e);
        // });
    },
    methods: {
        goHome() {
            this.$navigateTo(App);
        },
        showBarCode() {
            this.$showModal(UserBarCode)
        },
    }
};

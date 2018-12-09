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
                            name: 'Pizzeria',
                            category: 1,
                            tak: false,
                        },
                        {
                            id: 2,
                            name: 'Kebab',
                            category: 1,
                            tak: false,
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Zakupy',
                    things: []
                },
                {
                    id: 3,
                    name: 'Zwiedzanie',
                    things: [
                        {
                            id: 3,
                            name: 'Zamek',
                            category: 3,
                            tak: false,
                        },
                        {
                            id: 4,
                            name: 'Pomnik',
                            category: 3,
                            tak: false,
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Komunikacja',
                    things: []
                }
            ],
            things: [
                {
                    id: 1,
                    name: 'Pizzeria',
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
                    name: 'Zamek',
                    category: 3,
                    tak: false,
                },
                {
                    id: 4,
                    name: 'Pomnik',
                    category: 3,
                    tak: false,
                },
            ]
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
          <TabViewItem title="Gastronomia">
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
          <TabViewItem title="Zwiedzanie">
            <Label text="Label in Tab 2" />
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

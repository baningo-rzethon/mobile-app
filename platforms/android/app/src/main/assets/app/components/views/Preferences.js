const App = require('./../App');

module.exports = {
    data() {
        return {
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
           <Image src="~/images/Rzeszow_logo.svg.png" height="40" row="0" col="0" />
           <Label text="RzeTour" fontSize="24" row="0" col="1" verticalAlignment="center" />
           <Image @tap="alert('todo')" src="~/images/iconGears.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="3" v-show="loggedIn" />
           <Image @tap="showBarCode()" src="~/images/iconBarCodes1.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="4" v-show="loggedIn" />
        </GridLayout>
      </ActionBar>
      
      <ScrollView>
        <ListView for="thing in things">
          <v-template>
            <GridLayout columns="*, *" rows="60">
              <Label :text="thing.name" class="h3" row="0" col="0" />
              <Switch v-model="thing.tak" row="0" col="1" />
            </GridLayout>
          </v-template>
        </ListView>
      </ScrollView>
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
        }
    }
};

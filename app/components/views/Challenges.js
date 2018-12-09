const App = require('./../App');

module.exports = {
    data() {
        return {
            challenges: [
                {
                    id: 1,
                    name: 'Lorem ipsum'
                },
                {
                    id: 2,
                    name: 'Dolor sit'
                },
            ]
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="RzeTour">
        <GridLayout columns="50, auto, *, auto, auto" rows="auto">
           <Image src="~/images/Rzeszow_logo.svg.png" height="40" row="0" col="0" />
           <Label text="RzeTour" fontSize="24" row="0" col="1"/>
           <Image @tap="alert('todo')" src="~/images/iconGears.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="3" v-show="loggedIn" />
           <Image @tap="showBarCode()" src="~/images/iconBarCodes1.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="4" v-show="loggedIn" />
        </GridLayout>
      </ActionBar>
      
      <ScrollView>
        <ListView for="challenge in challenges">
          <v-template>
            <GridLayout columns="*, auto, *" rows="60">
              <Label :text="challenge.name" class="h3" row="0" col="0" verticalAlignment="center" />
              <Button row="0" col="2">Rozpocznij</Button>
            </GridLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </Page>
  `,
    mounted() {
        //TODO request api
    },
    methods: {
        goHome() {
            this.$navigateTo(App);
        }
    }
};

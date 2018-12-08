const MainScreen = require('./views/MainScreen');
const UserBarCode = require('./parts/UserBarCode');

module.exports = {
    data() {
        return {
            surprise: false,
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="RzeTours"/>
      
      <ScrollView>
        <StackLayout>
            <Button @tap="showBarCode()" text="Pokaż kod" />
            <Image class="m-20" src="~/images/Rzeszow_logo.svg.png"/>
            <Label text="Rzetoure" class="h1 text-center" />
            <MainScreen />
        </StackLayout>
      </ScrollView>
    </Page>
  `,
    components: {
        MainScreen,
        UserBarCode
    },
    methods: {
        showBarCode() {
            this.$showModal(UserBarCode)
        }
    }
};

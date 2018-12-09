const App = require('./../App');

module.exports = {
    data() {
        return {};
    },
    template: `
      <ActionBar class="action-bar" title="RzeTour">
        <StackLayout orientation="horizontal">
            <Image @tap="" src="~/images/Rzeszow_logo.svg.png" height="40" verticalAlignment="center" />
            <Label text="RzeTour" fontSize="24" verticalAlignment="center" />
        </StackLayout>
      </ActionBar>
  `,
    methods: {
      goHome() {
          this.$navigateTo(App);
      }
    }
};

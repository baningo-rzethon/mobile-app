module.exports = {
    props: ['challenge'],
    data() {
        return {
        };
    },
    template: `
    <Page>
        <StackLayout class="p-10">
          <Label class="p-20 h2 font-weight-bold text-center" :text="challenge.name"/>
          <Label textWrap="true" :text="challenge.description"/>
          <Label :text="challenge.timeLimit" class="h1 text-center"/>
          <Label text="limit czasu" class="h6 text-center"/>
          <Button @tap="$modal.close(challenge)" text="Rozpocznij" class="btn btn-primary"/>
          <WebView height="1200px" src="https://www.openstreetmap.org/directions?engine=graphhopper_foot&route=50.03749%2C22.00173%3B50.03446%2C22.00100#map=17/50.03652/22.00216" />
        </StackLayout>
    </Page>
  `,
};

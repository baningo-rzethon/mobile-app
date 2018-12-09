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
          <WebView height="1200px" src="https://rzethon.shymi.eu/pages/map" />
        </StackLayout>
    </Page>
  `,
};

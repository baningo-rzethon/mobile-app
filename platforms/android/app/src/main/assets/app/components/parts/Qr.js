module.exports = {
    data() {
        return {
        };
    },
    template: `
    <Page>
        <StackLayout class="p-10">
          <Label text="Zeskanój kod QR:"/>
          <Image src="~/images/iconQr.png"/>
          <Button @tap="$modal.close('Ulica 3-Maja')" text="Skanuj"/>
        </StackLayout>
    </Page>
  `,
};

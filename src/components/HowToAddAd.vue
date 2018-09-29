<template>
  <div>
    <div class="bg-gray pt-5 pb-3 primary-txt">
      <v-container grid-list-md text-xs-center >
        <v-layout row wrap text-lg-center>
          <v-flex xs12 pa-3 v-html="this.$store.state.HowAddContents.title">
            <!--<h6>Leverer du beskæftigelsestilbud eller mentorstøtte til landets kommuner..</h6>-->
          </v-flex>
        </v-layout>
        <v-layout row wrap text-md-left>
          <v-flex xs12 md6 pa-4 v-html="this.$store.state.HowAddContents.LeftContent">
            <!--<p>-->
            <!--<b>Så er du kommet til det helt rigtige sted!</b>-->
            <!--Forestil dig at du er ”i spil” hver gang en sagsbehandler eller leder i dit virkeområde ønsker at finde et tilbud til en eller flere borgere.-->
            <!--Kommunekontakt er den eneste markedsplads som henvender sig direkte til kommunernes jobcentre. Vi bruger alt vores tid på at promovere markedspladsen og de ydelser som vores annoncører tilbyder overfor jobcentrene.-->
            <!--</p>-->
            <!--<v-layout row wrap text-md-left>-->
            <!--<v-flex xs1>-->
            <!--<v-checkbox-->
            <!--v-model="checkbox000"-->
            <!--label=""-->
            <!--data-vv-name="checkbox"-->
            <!--type="checkbox"-->
            <!--required-->
            <!--class="pt-1"-->
            <!--&gt;</v-checkbox>-->
            <!--</v-flex>-->
            <!--<v-flex xs11 text-xs-left pl-3>-->
            <!--Konstant synlighed på nettet og for alle <br>-->
            <!--kommuner/sagsbehandlere/ledere-->
            <!--</v-flex>-->
            <!--<v-flex xs1>-->
            <!--<v-checkbox-->
            <!--v-model="checkbox001"-->
            <!--label=""-->
            <!--data-vv-name="checkbox"-->
            <!--type="checkbox"-->
            <!--required-->
            <!--class="pt-1"-->
            <!--&gt;</v-checkbox>-->
            <!--</v-flex>-->
            <!--<v-flex xs11 text-xs-left pl-3>-->
            <!--Dag til dag ændring af din annonce i takt med <br>-->
            <!--udviklingen af dine tilbud.-->
            <!--</v-flex>-->
            <!--<v-flex xs1>-->
            <!--<v-checkbox-->
            <!--v-model="checkbox002"-->
            <!--label=""-->
            <!--data-vv-name="checkbox"-->
            <!--type="checkbox"-->
            <!--required-->
            <!--class="pt-1"-->
            <!--&gt;</v-checkbox>-->
            <!--</v-flex>-->
            <!--<v-flex xs11 text-xs-left pl-3>-->
            <!--Sparede udgifter/tid til promotion (brochureomdeling, <br>-->
            <!--reklamemails m.v.)-->
            <!--</v-flex>-->
            <!--<v-flex xs1>-->
            <!--<v-checkbox-->
            <!--v-model="checkbox003"-->
            <!--label=""-->
            <!--data-vv-name="checkbox"-->
            <!--type="checkbox"-->
            <!--required-->
            <!--class="pt-1"-->
            <!--&gt;</v-checkbox>-->
            <!--</v-flex>-->
            <!--<v-flex xs11 text-xs-left pl-3>-->
            <!--Fleksibel spredning og målretning af ”dit budskab” til <br>-->
            <!--ønskede kommuner.-->
            <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<p>-->
            <!--<b>Opret din gratis profil/annonce her</b>-->
            <!--</p>-->
            <!--<p>-->
            <!--Ved oprettelsen skal du blot bruge et portrætbillede eller logo og dine virksomhedsoplysninger.<br>-->
            <!--Portrætbillede eller logo som du kan uploade, <br>-->
            <!--din virksomheds P-nummer, tlf og e-mail og evt.<br>-->
            <!--hjemmesideadresse, oplysning om hvilke kommuner(område) du vil servicere.-->
            <!--</p>-->
          </v-flex>
          <v-flex xs12 md6 pa-4 >
            <p v-html="this.$store.state.HowAddContents.RightContent"></p>
            <!--<p>-->
            <!--<b>Gratis annoncering i promotion perioden - uden binding eller-->
            <!--krav om opsigelse m.v.-->
            <!--</b></p>-->
            <!--<p>-->
            <!--I perioden xx.xx.xx – xx.xx.xx er det gratis at annoncere.-->
            <!--</p>-->
            <!--<p>-->
            <!--Du binder dig ikke til noget og der sker ingen automatisk fornyelse af abonnement.-->
            <!--Vi tillader os at kontakte dig i promotion perioden med tilbud om at tegne abonnement og med henblik på at høre om din oplevelse af vores service.-->
            <!--</p>-->
            <!--<p>Vi byder også en hver feedback velkommen.-->
            <!--</p>-->
            <!--<p>-->
            <!--<b>-->
            <!--Opret din gratis profil/annonce her-->
            <!--</b>-->
            <!--</p>-->
            <!--<p>-->
            <!--Ved oprettelsen skal du blot bruge et portrætbillede eller logo og dine virksomhedsoplysninger.-->
            <!--</p>-->
            <v-btn class="bg-kk-btn ma-0" @click="openDIalog('selectTypeModal')">
              Opret profil
              <i class="material-icons">arrow_forward</i>
            </v-btn>
            <v-layout row wrap>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!--terms-modal-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="TermsModal" class="large" persistent width="75%">
      <v-card class="bg-white pl-5 pt-5 pr-5 pb-3 kkblue">
        <v-btn flat icon class="kkblue right mt-0 mr-0"@click.stop="openDIalog('SignUpModal')" @click.native="TermsModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <h3 class="primary-txt"><b>Kommunekontakt.dk</b></h3>
        <h4>Den sikre vej til det rette tilbud</h4>
        <h5 class="gray-txt"><b>Betingelser og vilkår</b></h5>
        <p>Læs venligst nedenstående betingelser og vilkår forud for brug af denne hjemmeside.
          Kommunekontakt er en formidlingshjemmeside og ved at gøre brug af hjemmesiden har du accepteret disse betingelser.
          Såfremt du ikke kan accepterer betingelserne, beder vi dig forlade hjemmesiden uden at gøre yderligere brug af den.</p>
        <h5 class="gray-txt"><b>Kommunekontakts ansvar</b></h5>
        <p>Kommunekontakt er forpligtet til at gøre sig kommercielle, rimelige bestræbelser på at levere de ydelser, som er aftalt, såfremt Brugeren rettidigt leverer det nødvendige materiale.
          Kommunekontakt formidler annoncer fra erhvervsdrivende til landets kommuner og offentligheden i øvrigt(kommunekontakts hjemmeside er offentligt tilgængelig). Disse parter(erhvervsdrivende, kommuner og offentligheden i øvrigt) beskrives i det følgende som brugere.
          Kommunekontakts ydelser er således alene beregnet til private og offentlige virksomheder. Dette uanset om brugerne af kommunekontakts ydelser er registeret som virksomhed eller ej. Samarbejde med Kommunekontakt eller benyttelse af kommunekontakts ydelser er således ikke omfattet af lov om forbrugeraftaler.
          Brugerne er uafhængige af Kommunekontakt. Kommunekontakt kan ikke drages til ansvar for de aftaler der bliver indgået mellem brugerne på siden.
          Brugerne - herunder direkte og indirekte annoncører - er selvstændigt ansvarlige for opsætning og indhold af tilbud, kundeservice og levering af de tjenesteydelser, som de udbyder. Kommunekontakt er således ikke ansvarlig for udformningen af brugernes tilbud, kundeservice eller levering af tjenesteydelser.
          Kommunekontakt påtager sig intet ansvar for annoncer eller for de aftaler, som brugerne indgår på baggrund af tilbud formidlet af Kommunekontakt eller Kommunekontakts samarbejdspartnere. Kommunekontakt er ikke ansvarlig for fejl eller mangler i forbindelse med tilbudsgivernes levering af varer eller tjenesteydelser.
          Brugeren accepterer, at Kommunekontakt ikke garanterer kontinuerlig eller sikker adgang til Kommunekontakts ydelser og at Kommunekontakt ikke gennemgår indhold eller oplysninger fra annoncører på hjemmesiden og brugere af Kommunekontakts ydelser, hvorfor Kommunekontakt ikke giver nogen garanti eller indeståelse i forbindelse med visningen af et sådant indhold eller oplysninger, herunder i søgeresultater.
          Brugeren accepterer, at Kommunekontakt ikke er ansvarlig for noget tab, herunder direkte tab, tab af fortjeneste, driftstab, goodwill, omkostninger, udgifter og andre følgeskader, der opstår som følge af Brugerens brug af Kommunekontakts hjemmesider, ydelser, produkter og platforme, selvom Brugeren underretter Kommunekontakt herom, eller Kommunekontakt med rimelighed kunne forudse muligheden for sådanne skader.
        </p>
        <h5 class="gray-txt"><b>Data og brugsret</b></h5>
        <p>De indtastede annonce- og profilinformationer gemmes af Kommunekontakt og ved godkendelse af betingelser og vilkår overdrager du brugsret af indholdet til Kommunekontakt. Indholdet bruges til fremstilling af din(e) annonce(r) på hjemmesiden www.kommunekontakt.dk.
          Informationerne kan dog også benyttes i forbindelse med eksempelvis før- og efter historier i nyhedsbreve samt ved eventuelle gengivelser af hjemmesiden og delelementer af hjemmesiden i opslag på sociale medier anvendt af  Kommunekontakt eller anden markedsføring og branding af Kommunekontakt.
          Dine indtastede informationer ville ikke blive videregivet, solgt eller brugt til markedsføring i andre sammenhænge end dem der følger af Kommunekontakts ydelser og produkter. Ønsker du, at få dine oplysninger slettet eller rettet på kommunekontakts server kan du til enhver tid anmode om dette.
          Prisændringer, betaling og abonnementers fornyelse
          Kommunekontakt opkræver betaling for visse ydelser. Priserne fremgår af individuelle tilbud afgivet af kommunekontakt til potentielle brugere og generelle tilbud opslået på hjemmesiden www. Kommunekontakt.dk
          Kommunekontakt er til enhver tid berettiget til at ændre afregningsmetoder og prisernes størrelse for endnu ikke indgåede aftaler uden varsel, og Kommunekontakt kan derfor bl.a. ændre sine priser midlertidigt eksempelvis i forbindelse med kampagner eller nye ydelser eller for bestemte kundegrupper – f.eks. nye kunder.
          Ved løbende automatisk abonnementsfornyelse skal afmeldingen af abonnementsfornyelsen ske senest 5 hverdage før udløbet af den aktuelle abonnentsperiode. Ved senere afmelding træder afmeldingen og betalingsforpligtelsen først i kraft ved udløbet af den næstkommende abonnementsperiode.
          Ved løbende automatisk abonnementsfornyelse varsles ændringer i abonnementspriser senest 3 mdr. før prisændringen træder i kraft med fremadrettet virkning. Varslingen sker til den mailadresse som er registeret i Brugerens profil på kommunekontakt.dk.
          Brugeren har selv ansvar for, at den registrerede mailadresse er korrekt. Såfremt abonnementet ikke er opsagt inden den varslede prisændrings ikrafttræden har Brugeren accepteret prisændringen.
        </p>
        <h5 class="gray-txt"><b>Manglende betaling</b></h5>
        <p>Såfremt Brugeren ikke betaler rettidigt, kan Kommunekontakt begrænse brugerens mulighed for at bruge ydelserne. Såfremt Brugeren betaler med kreditkort, Dankort eller på anden måde, kan Brugerens betaling blive pålagt et gebyr, som Brugeren vil blive oplyst om, når Brugeren foretager betalingen.
          Kommunekontakt forbeholder sig retten til at slette Brugerens profil/annonce såfremt Kommunekontakt ikke rettidigt har modtaget betaling.
          Opsigelse, opsigelsesvarsel og passivering af profil
          Ved løbende automatisk abonnementsfornyelse skal afmeldingen af abonnementsfornyelsen ske senest 5 hverdage før udløbet af den aktuelle abonnentsperiode. Ved senere afmelding træder afmeldingen først i kraft ved udløbet af den næstkommende abonnementsperiode
          Opsigelsen skal ske ved at brugeren logger sig ind på sin profil og opsiger abonnementet. Dette gøres ved at passivere profilen samt eventuelle underliggende profiler/annoncer hvis brugeren har oprettet mere end en profil/annonce. Ved passivering af profiler/annoncer bevares oplysningerne i op til 3 år og profil og annonce kan således aktiveres igen hvis brugeren ønsker dette. Hvis brugen samtidigt med passivering af sin profil(er)/annonce(r) ønsker sine oplysninger permanent slettet med det samme skal dette meddeles til kommunekontakt på nedenstående mail eller ved almindeligt brev.
          Hvis du som bruger ikke kan komme ind på din profil kan du bede om at blive kontaktet for opsigelse ved at skrive til os på opsigelse@kommunekontakt.dk.
          Husk at oplyse dit navn/firmanavn og dit telefonnummer så vi kan få bekræftet din opsigelse.</p>
        <h5 class="gray-txt"><b>Ændring af vilkår</b></h5>
        <p>Vi kan til enhver tid ændre vores hjemmesidevilkår. Du er underlagt de politikker, vilkår og betingelser der er gældende på det tidspunkt du gør brug af hjemmesiden.
        </p>
        <h5 class="gray-txt"><b>Nyhedsmail og kontaktaccept</b></h5>
        <p> Kommunekontakt må kontakte dig via mail, telefon og sms. Herunder i forbindelse med opsigelse af abonnement. Du accepterer at modtage kommunekontakts nyhedsbrev højst 2 gange om måneden. Nyhedsbrevet kan til enhver tid afmeldes.
        </p>
        <v-flex text-lg-right md12 pa-3>
          <v-btn class="bg-kk-btn trans" large  @click.stop="openDIalog('SignUpModal')" @click.native="TermsModal = false">LUK</v-btn>
        </v-flex>
      </v-card>

    </v-dialog>
    <!--Select-type 1-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="selectTypeModal" class="large" persistent width="60%">
      <v-card class="bg-white pa-5">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="selectTypeModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container grid-list-md>
          <v-layout row wrap text-lg-center>
            <v-flex>
              <h5>Vælg profil type</h5>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="">
            <v-flex md8 offset-md2  xs12>
              <v-select
                v-bind:items="select_items_type"
                v-model="selectTypeDD"
                single-line
                item-text="options"
                placeholder="Vælg type"
                class="kk-select mb-2"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex md6 offset-md4 xs12  mr-5>
              <v-btn class="bg-kk-btn" v-if="!selectTypeDD" disabled @click="selectTypeModal = false" @click.stop="openDIalog('SignUpModal')">Opret</v-btn>
              <v-btn class="bg-kk-btn" v-if="selectTypeDD" @click.stop="selectTypeModal = false" @click="SignupModal">Opret</v-btn>
              <v-btn class="bg-kk-btn trans" @click="selectTypeModal = false">Fortryd</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!--Signup-->
    <!-- <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="SignUpModal" class="large" persistent width="75%">
    <v-card class="bg-white pa-5 kkblue">
    <form @submit.prevent="validateBeforeSubmit">
    <v-container grid-list-md>
    <v-layout row wrap>
    <v-flex text-xs-left>
    <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
    <h6 class="text-xs-center">Opret profil {{myType.options }}</h6>
    <p class="text-xs-center"><b>Stamdata</b></p>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
    <v-flex md4 text-xs-center text-md-left pa-3>
    <div>
    <label for="avatar"><b>Profilbillede</b></label>
    <v-avatar
    :tile="tile"
    size="200px"
    class=""
    id="avatar"
    >
    <croppa v-model="myCroppa ">
    <img slot="placeholder"
    src="../assets/profile.png">
    </croppa>
    &lt;!&ndash;<img src="./../assets/profile.png" alt="avatar">&ndash;&gt;
    </v-avatar>
    </div>
    <div class="mt-2 text-xs-left" v-if="myType.options == 'Mentor'" >
    <label><b>*Køn:</b></label>
    <v-layout row wrap>
    <v-radio-group v-model="gender"  v-validate="'required'"
    name="gender"
    :class="{'input': true, 'is-danger': errors.has('gender') }" row class="bg-trans">
    <v-radio label="Mand"
    name="radio_group" v-validate="'required|in:male,female'" value="male" type="radio"
    class="bg-trans kkblue" ></v-radio>
    <v-radio label="Kvinde"
    name="radio_group" value="female" type="radio"
    class="bg-trans kkblue"></v-radio>
    <small class="red&#45;&#45;text help is-danger" v-show="errors.has('radio_group')">{{ errors.first('radio_group') }}</small>
    </v-radio-group>
    </v-layout>
    <small v-show="errors.has('gender')" class="red&#45;&#45;text help is-danger">{{ errors.first('gender') }}</small>
    </div>
    &lt;!&ndash; <div class="mt-2 text-xs-left">
    <label><b>*Køn:</b></label>
    <v-layout row wrap>
    <v-radio-group v-model="gender"  v-validate="'required'"
    name="gender"
    :class="{'input': true, 'is-danger': errors.has('gender') }" row class="bg-trans">
    <v-radio label="Mand"
    name="radio_group" v-validate="'required|in:male,female'" value="male" type="radio"
    class="bg-trans kkblue" ></v-radio>
    <v-radio label="Kvinde"
    name="radio_group" value="female" type="radio"
    class="bg-trans kkblue"></v-radio>
    <small class="red&#45;&#45;text help is-danger" v-show="errors.has('radio_group')">{{ errors.first('radio_group') }}</small>
    </v-radio-group>
    </v-layout>
    <small v-show="errors.has('gender')" class="red&#45;&#45;text help is-danger">{{ errors.first('gender') }}</small>
    </div>&ndash;&gt;
    </v-flex>
    <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
    <div>
    <label><b>*Navn:</b></label>
    <v-text-field
    name="name"
    v-validate="'required'"
    :class="{'input': true, 'is-danger': errors.has('name') }"
    v-model="name"
    hide-details single-line
    type="text"
    placeholder="Navn">
    </v-text-field>
    <small v-show="errors.has('name')" class="red&#45;&#45;text help is-danger">{{ errors.first('name') }}</small>
    </div>
    <div class="mt-3">
    <label><b>*Brugernavn:</b></label>
    <v-text-field
    name="user_name"
    v-validate="'required'"
    :class="{'input': true, 'is-danger': errors.has('user_name') }"
    type="text"
    v-model="username"
    hide-details single-line
    placeholder="Brugernavn">
    </v-text-field>
    <small v-show="errors.has('user_name')" class="red&#45;&#45;text help is-danger">{{ errors.first('user_name') }}</small>
    </div>
    <div class="mt-3">
    <label ><b>*Mail:</b></label>
    <v-text-field
    v-validate="'required|email'"
    :class="{'input': true, 'is-danger': errors.has('email')}"
    name="email"
    v-model="email"
    hide-details single-line
    placeholder="sample@mail.dk"
    type="email">
    </v-text-field>
    <small v-show="errors.has('email')" class="red&#45;&#45;text help is-danger">{{ errors.first('email') }}</small>
    </div>
    <div class="mt-3">
    <label><b>*Telefonnummer:</b></label>
    <v-text-field
    name="phone"
    v-validate="'required|numeric'"
    :class="{'input': true, 'is-danger': errors.has('phone') }"
    type="text"
    v-model="pnumber"
    hide-details single-line
    placeholder="Telefonnummer">
    </v-text-field>
    <small v-show="errors.has('phone')" class="red&#45;&#45;text help is-danger">{{ errors.first('phone') }}</small>
    </div>
    </v-flex>
    <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
    <div>
    <label><b>*Adgangskode:</b></label>
    <v-text-field
    name="password"
    v-validate="'required|confirmed:{target}'"
    :class="{'input': true, 'is-danger': errors.has('password') }"
    v-model="password"
    hide-details single-line
    type="password"
    placeholder="Indtast adgangskode">
    </v-text-field>
    <small v-show="errors.has('password')" class="red&#45;&#45;text help is-danger">{{ errors.first('password') }}</small>
    </div>
    <div class="mt-3">
    <label><b>*Bekræft adgangskode:</b></label>
    <v-text-field
    name="{target}"
    :class="{'input': true, 'is-danger': errors.has('password') }"
    type="password"
    v-model="passwordRe"
    hide-details single-line
    placeholder="Bekræft adgangskode">
    </v-text-field>
    <small v-show="errors.has('password')" class="red&#45;&#45;text help is-danger">{{ errors.first('password') }}</small>
    </div>
    <div class="mt-3">
    <label><b>URL:</b></label>
    <v-text-field
    name="url"
    v-validate="'required|url'"
    :class="{'input': true, 'is-danger': errors.has('url') }"
    id="url"
    v-model="url"
    type="text"
    hide-details single-line
    placeholder="HTTP://google.com">
    </v-text-field>
    <small v-show="errors.has('url')" class="red&#45;&#45;text help is-danger">{{ errors.first('url') }}</small>
    </div>
    <div class="mt-3">
    <label ><b>*Vælg kommune:</b></label>
    <v-select
    v-bind:items="municipals"
    name="list"
    v-validate="'required'"
    v-model="selectmunisipality"
    single-line
    item-text="name"
    placeholder="Vælg Kommune"
    return-object
    persistent-hint
    class="kk-select mb-0"
    ></v-select>
    <small v-show="errors.has('list')" class="red&#45;&#45;text help is-danger" >{{ errors.first('list') }}</small>
    </div>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
    <v-flex class="pa-3">
    <label><b>*Vælg arbejdsområder:</b></label>
    </v-flex>
    </v-layout>
    <v-layout row wrap text-lg-center>
    <v-flex md3 xs6 lg2  v-for="skill in skilsx">
    <v-checkbox
    name="ex5"
    type="checkbox"
    class="kkblue"
    data-vv-name="checkbox"
    :value="skill.id"
    v-model="ex5"
    :label="skill.name">
    </v-checkbox>
    </v-flex>
    <small v-show="errors.has('ex5')" class="red&#45;&#45;text help is-danger">{{ errors.first('ex5') }}</small>
    </v-layout>
    <v-layout row wrap>
    <v-flex class="ma-3">
    <label ><b>Fritekst:</b></label>
    <v-text-field v-model="discription" class="breakWord bg-secondary kk-textarea" box multi-line placeholder="Tekst ..."></v-text-field>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
    <v-spacer></v-spacer>
    <v-flex md1 mr-4>
    <v-btn class="bg-kk-btn trans" @click.native="SignUpModal = false">Fortryd</v-btn>
    </v-flex>
    <v-flex md3>
    <v-btn class="bg-kk-btn" type="submit" @click="signup()">Tilføj betalingsoplysninger</v-btn>
    </v-flex>
    </v-layout>

    </v-container>
    </form>
    </v-card>
    </v-dialog>-->
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="SignUpModal" class="large" persistent width="75%">
      <v-card class="bg-white pa-5 kkblue">
        <v-btn flat icon class="kkblue right mt-0 mr-0" @click.native="SignUpModal = false">
          <v-icon>close</v-icon>
        </v-btn>
        <form @submit.prevent="validateBeforeSubmit">
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex text-xs-left>
                <small><b>Felter markeret med en stjerne <br> (*) er påkrævet.</b></small>
                <h6 class="text-xs-center capitalize">Opret profil {{myType.options }}</h6>
                <p class="text-xs-center"><b>Profiloplysninger</b></p>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex md4 text-xs-center text-md-left pa-3>
                <div>
                  <label for="avatar"><b>Upload billede eller logo</b></label>
                  <v-avatar
                    :tile="tile"
                    size="200px"
                    class=""
                    id="avatar"
                  >
                    <croppa v-model="myCroppa ">
                      <img slot="placeholder"
                           src="../assets/profile.png">
                    </croppa>
                    <!--<img src="./../assets/profile.png" alt="avatar">-->
                  </v-avatar>
                </div>
                <div class="mt-2 text-xs-left" v-if="myType.options == 'Mentor'" >
                  <label><b>*Køn:</b></label>
                  <v-layout row wrap>
                    <v-radio-group v-model="gender"  v-validate="'required'"
                                   name="gender"
                                   :class="{'input': true, 'is-danger': errors.has('gender') }" row class="bg-trans">
                      <v-radio label="Mand"
                               name="radio_group" v-validate="'required|in:male,female'" value="male" type="radio"
                               class="bg-trans kkblue" ></v-radio>
                      <v-radio label="Kvinde"
                               name="radio_group" value="female" type="radio"
                               class="bg-trans kkblue"></v-radio>
                      <small class="red--text help is-danger" v-show="errors.has('radio_group')">{{ errors.first('radio_group') }}</small>
                    </v-radio-group>
                  </v-layout>
                  <small v-show="errors.has('gender')" class="red--text help is-danger">{{ errors.first('gender') }}</small>
                </div>
              </v-flex>
              <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
                <div>
                  <label><b>*Navn:</b></label>
                  <v-text-field
                    name="name"
                    v-validate="'required'"
                    :class="{'input': true, 'is-danger': errors.has('name') }"
                    v-model="name"
                    hide-details single-line
                    type="text"
                    placeholder="Navn">
                  </v-text-field>
                  <small v-show="errors.has('name')" class="red--text help is-danger">{{ errors.first('name') }}</small>
                </div>
                <div class="mt-3">
                  <label><b>*Brugernavn:</b></label>
                  <v-text-field
                    name="user_name"
                    v-validate="'required'"
                    :class="{'input': true, 'is-danger': errors.has('user_name') }"
                    type="text"
                    v-model="username"
                    hide-details single-line
                    placeholder="Brugernavn">
                  </v-text-field>
                  <small v-show="errors.has('user_name')" class="red--text help is-danger">{{ errors.first('user_name') }}</small>
                </div>
                <div class="mt-3">
                  <label ><b>*Mail:</b></label>
                  <v-text-field
                    v-validate="'required|email'"
                    :class="{'input': true, 'is-danger': errors.has('email')}"
                    name="email"
                    v-model="email"
                    hide-details single-line
                    placeholder="email@email.dk"
                    type="email">
                  </v-text-field>
                  <small v-show="errors.has('email')" class="red--text help is-danger">{{ errors.first('email') }}</small>
                </div>
                <div class="mt-3">
                  <label><b>*Telefonnummer:</b></label>
                  <v-text-field
                    name="phone"
                    v-validate="'required|numeric'"
                    :class="{'input': true, 'is-danger': errors.has('phone') }"
                    type="text"
                    v-model="pnumber"
                    hide-details single-line
                    placeholder="Telefonnummer">
                  </v-text-field>
                  <small v-show="errors.has('phone')" class="red--text help is-danger">{{ errors.first('phone') }}</small>
                </div>
              </v-flex>
              <v-flex md4 text-lg-left pa-3 :class="{ 'control': true }">
                <div>
                  <label><b>*Adgangskode:</b></label>
                  <v-text-field
                    name="password"
                    v-validate="'required|confirmed:{target}'"
                    :class="{'input': true, 'is-danger': errors.has('password') }"
                    v-model="password"
                    hide-details single-line
                    type="password"
                    placeholder="Indtast adgangskode">
                  </v-text-field>
                  <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
                </div>
                <div class="mt-3">
                  <label><b>*Bekræft adgangskode:</b></label>
                  <v-text-field
                    name="{target}"
                    :class="{'input': true, 'is-danger': errors.has('password') }"
                    type="password"
                    v-model="passwordRe"
                    hide-details single-line
                    placeholder="Bekræft adgangskode">
                  </v-text-field>
                  <small v-show="errors.has('password')" class="red--text help is-danger">{{ errors.first('password') }}</small>
                </div>
                <div class="mt-3">
                  <label><b>Hjemmeside/URL:</b></label>
                  <v-text-field
                    name="url"
                    v-validate="'url'"
                    :class="{'input': true, 'is-danger': errors.has('url') }"
                    v-model="url"
                    type="text"
                    hide-details single-line
                    placeholder="http://google.dk">
                  </v-text-field>
                  <small v-show="errors.has('url')" class="red--text help is-danger">{{ errors.first('url') }}</small>
                </div>
                <div class="mt-3">
                  <label ><b>*Vælg kommuner (dit virkeområde):</b></label>
                  <v-select
                    placeholder="Vælg Kommune"
                    v-bind:items="municipals"
                    v-validate="'required'"
                    name="list"
                    item-text="name"
                    item-value="id"
                    v-model="selectmunisipality"
                    persistent-hint
                    multiple
                    max-height="400"
                    class="kk-select mb-0"
                  ></v-select>
                  <small v-show="errors.has('list')" class="red--text help is-danger" >{{ errors.first('list') }}</small>
                </div>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="pa-3">
                <label><b>*Angiv faglige/praktiske kompetenceområder</b></label>
              </v-flex>
            </v-layout>
            <v-layout row wrap text-lg-center>
              <v-flex md3 xs6 lg2  v-for="skill in skilsx">
                <v-checkbox
                  name="ex5"
                  type="checkbox"
                  class="kkblue"
                  data-vv-name="checkbox"
                  :value="skill.id"
                  v-model="ex5"
                  :label="skill.name">
                </v-checkbox>
              </v-flex>
              <small v-show="errors.has('ex5')" class="red--text help is-danger">{{ errors.first('ex5') }}</small>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="ma-3">
                <label ><b>Beskrivelse</b></label>
                <v-text-field v-model="discription" class="bg-secondary kk-textarea" box multi-line placeholder="Skriv om dig selv eller hvad du kan hjælpe med"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs1>
                <v-checkbox
                  name="terms"
                  type="checkbox"
                  class="kkblue"
                  data-vv-name="checkbox"
                  v-model="terms"
                >
                </v-checkbox>
              </v-flex>
              <v-flex xs11>
                <h6 class="point" style="line-height: 33px; margin-left: -25px; font-weight: 300;" @click="openDIalog('TermsModal')"><b>jeg har læst og accepterer kommunekontakts vilkår- <span style="font-weight: 700">læs betingelser her</span></b></h6>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-spacer></v-spacer>
              <v-flex md1 mr-4>
                <v-btn class="bg-kk-btn trans" @click.native="SignUpModal = false">Fortryd</v-btn>
              </v-flex>
              <v-flex md3>
                <v-btn class="bg-kk-btn" v-if="terms" type="submit" @click="signup()">Tilføj betalingskort</v-btn>
                <v-btn class="bg-kk-btn" disabled v-if="!terms" type="submit">Tilføj betalingskort</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        select_items_type: [
          { options: 'Mentor' },
          { options: 'Beskæftigelsestilbud' }
        ],
        selectTypeDD: null,
        terms: null,
        TermsModal: false,
        SignUpModal: false,
        name: '',
        email: '',
        password: '',
        url: '',
        passwordRe: '',
        myCroppa: {},
        selectmunisipality: [],
        gender: '',
        municipals: [],
        tile: false,
        discription: '',
        pnumber: '',
        username: '',
        skills: [],
        ex5: [],
        AddPaymentModal: false,
        selectTypeModal: false,
        checkbox000: true,
        checkbox001: true,
        checkbox002: true,
        checkbox003: true
      }
    },
    created () {
// this.skillsx()
      this.municipal()
    },
    mounted () {
      this.getHContent()
    },
    methods: {
      getHContent () {
        this.$http.get('api/contents')
          .then(response => {
            this.$store.state.HowAddContents = response.body[1]
// console.log(this.$store.state.HowAddContents)
          }, (response) => {
// console.log(response.body[0]
          })
      },
      openDIalog (data) {
        this.selectTypeModal = data === 'selectTypeModal' ? !this.selectTypeModal : false
        this.SignUpModal = data === 'SignUpModal' ? !this.SignUpModal : false
        this.TermsModal = data === 'TermsModal' ? !this.TermsModal : false
        this.AddPaymentModal = data === 'AddPaymentModal' ? !this.AddPaymentModal : false
      },
      signup () {
        var data = {
          name: this.name,
          email: this.email,
          telephone: this.pnumber,
          user_name: this.username,
          password: this.password,
          url: this.url,
          avatar: this.myCroppa.generateDataUrl(),
          municipality: this.selectmunisipality,
// .id,
          gender: this.gender,
          discription: this.discription,
          user_type: this.selectTypeDD.options,
          skills: this.ex5
        }
        this.$http.post('api/auth/signup', data)
          .then(response => {
            this.$auth.setToken(response.body.token)
            this.ownerid = response.body.userId
            this.SignUpModal = false
            this.AddPaymentModal = true
          }, (response) => {
            this.$toasted.error(response.body.error.errors[Object.keys(response.body.error.errors)[0]] + '-====-', {timeout: 8000})
            console.log(response.body)
          })
      },
      ownerPay () {
        var data = {
          card_no: this.cardNumber,
          exp_year: this.cardYear,
          exp_month: this.cardMonth,
          cvv_no: this.cardcvc
        }
        this.$http.post('api/payment/user/' + this.ownerid + '/newcard', data)
          .then(response => {
            console.log(response.body)
            this.AddPaymentModal = false
            this.menu = true
          }, (response) => {
            console.log(response.body)
          })
      },
// skillsx () {
//   if (this.$store.state.skills.length === 0) {
//     this.$http.get('api/skill')
//       .then(response => {
//         this.skills = response.body.skills
//         this.$store.state.skills = response.body.skills
//       }, (response) => {
//         console.log(response.body)
//       })
//   }
// },
      SignupModal () {
        this.SignUpModal = true
        this.skillsx()
      },
      skillsx () {
        this.$store.state.skills = []
        if (this.selectTypeDD.options === 'Mentor') {
// this.$store.state.skills = []
          this.skillsMent()
        } else {
// this.$store.state.skills = []
          this.skillsSup()
        }
      },
      skillsMent () {
        if (this.$store.state.skills.length === 0) {
          this.$http.get('api/skill')
            .then(response => {
              this.skills = response.body.skills
              this.$store.state.skills = response.body.skills
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      skillsSup () {
        if (this.$store.state.skills.length === 0) {
          this.$http.get('api/skillSup')
            .then(response => {
              this.skills = response.body.skills
              this.$store.state.skills = response.body.skills
// console.log(response.body.skills)
            }, (response) => {
              console.log(response.body)
            })
        }
      },
      municipal () {
        if (this.$store.state.municipals.length === 0) {
          this.$http.get('api/municipal')
            .then(response => {
              this.municipals = response.body.municipals
              this.$store.state.municipals = response.body.municipals
             // console.log(response.body)
            }, (response) => {
              console.log(response.body)
            })
        }
      }
    },
    watch: {
      selectTypeDD () {
        this.$store.state.selectTypeDD = this.selectTypeDD
      },
      selectmunisipality () {
        this.$store.state.selectmunisipality = this.selectmunisipality
      }
    },
    computed: {
      // isTypex () {
      //   return this.$store.state.isType
      // },
      skilsx () {
        return this.$store.state.skills
      },
      myType () {
        return this.$store.state.selectTypeDD
      }
    }
  }
</script>
<style>
</style>

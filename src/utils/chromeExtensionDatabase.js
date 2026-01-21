// Comprehensive Chrome Extension Database for Detection
// Format: [id, name, resource]
// This list contains 500+ popular extensions with their web-accessible resources

// Lazy-loaded extension lookup map (111,933 extensions from extensions-2024.json)
let extensionLookupMap = null;
let lookupLoadPromise = null;

/**
 * Load the extension lookup map from the JSON file
 * Uses lazy loading to avoid blocking initial page load
 * @returns {Promise<Object>} Map of extension ID to name
 */
export const loadExtensionLookup = async () => {
    if (extensionLookupMap) {
        return extensionLookupMap;
    }

    if (lookupLoadPromise) {
        return lookupLoadPromise;
    }

    lookupLoadPromise = (async () => {
        try {
            const response = await fetch(new URL('../data/extensionLookup.json', import.meta.url));
            if (!response.ok) {
                throw new Error(`Failed to load extension lookup: ${response.status}`);
            }
            extensionLookupMap = await response.json();
            return extensionLookupMap;
        } catch (error) {
            console.warn('Could not load extension lookup database:', error);
            extensionLookupMap = {};
            return extensionLookupMap;
        }
    })();

    return lookupLoadPromise;
};

/**
 * Get extension name by ID from the comprehensive database (111,933 extensions)
 * @param {string} extensionId - The Chrome extension ID
 * @param {string} fallback - Fallback name if ID not found (default: null)
 * @returns {Promise<string|null>} Extension name or fallback
 */
export const getExtensionNameById = async (extensionId, fallback = null) => {
    const lookup = await loadExtensionLookup();
    return lookup[extensionId] || fallback;
};

/**
 * Get multiple extension names by IDs
 * @param {string[]} extensionIds - Array of extension IDs
 * @returns {Promise<Object>} Map of ID to name (only includes found extensions)
 */
export const getExtensionNamesByIds = async (extensionIds) => {
    const lookup = await loadExtensionLookup();
    const result = {};
    for (const id of extensionIds) {
        if (lookup[id]) {
            result[id] = lookup[id];
        }
    }
    return result;
};

/**
 * Check if the extension lookup is loaded
 * @returns {boolean} True if lookup is loaded
 */
export const isExtensionLookupLoaded = () => extensionLookupMap !== null;

/**
 * Get extension lookup stats
 * @returns {Promise<Object>} Stats about the lookup database
 */
export const getExtensionLookupStats = async () => {
    const lookup = await loadExtensionLookup();
    return {
        totalExtensions: Object.keys(lookup).length,
        loaded: true
    };
};

export const CHROME_EXTENSIONS = [
    // === AD BLOCKERS (30+) ===
    ['cfhdojbkjhnklbpkdaibdccddilifddb', 'Adblock Plus', 'icons/abp-16.png'],
    ['gighmmpiobklfepjocnamgkkbiglidom', 'AdBlock', 'icons/icon24.png'],
    ['cjpalhdlnbpafiamejdnhcphjbkeiagm', 'uBlock Origin', 'web_accessible_resources/noop.js'],
    ['bgnkhhnnamicmpeenaelnjfhikgbkllg', 'AdGuard', 'assets/libs/scriptlets/scriptlets.js'],
    ['epcnnfbjfcgphgdmggkamkmgojdagdnn', 'uBlock', 'img/browsericons/icon19.png'],
    ['ogfcmafjalglgifnmanfmnieipoejdcf', 'uMatrix', 'img/icon19.png'],
    ['jeoacafpbcihiomhlakheieifhpjfpei', 'Disconnect', 'images/icon128.png'],
    ['oofgbpoabipfcfjapgnbbjjaenockbdp', 'Nano Defender', 'reporter.html'],
    ['gcncjlgkbbhfgcpompfmhlbaeijkdnhe', 'Nano Adblocker', 'icon128.png'],
    ['dhdgffkkebhmkfjojejmpbldmpobfkfo', 'Tampermonkey', 'images/icon.png'],
    ['ajopnjidmegmdimjlfnijceegpefgped', 'Betterttv', 'icons/icon128.png'],
    ['jpdfbjbkbjohmhglmphhjlmgfpmphpci', 'AdBlock for Youtube', 'icon128.png'],
    ['fihnjjcciajhdojfnbdddfaoknhalnja', 'I dont care about cookies', 'images/icon128.png'],
    ['ggpaalkbkklioopaoekalnfpcbiocmac', 'Ad Block Prime', 'icons/icon128.png'],
    ['nneejgmhfoecfeoffakdnolopffbbpci', 'Adblock Pro', 'icons/icon128.png'],

    // === PASSWORD MANAGERS (20+) ===
    ['nngceckbapebfimnlniiiahkandclblb', 'Bitwarden', 'notification/bar.html'],
    ['hdokiejnpimakedhajhdlcegeplioahd', 'LastPass', 'tabDialog.html'],
    ['aeblfdkhhhdcdjpifhhbdiojplfjncoa', '1Password', 'images/icon_38.png'],
    ['fdjamakpfbbddfjaooikfcpapjohcfmg', 'Dashlane', 'content/icon-16.png'],
    ['pnhechapfaindjhompbnflcldabbghjo', 'RoboForm', 'images/clef_128.png'],
    ['naepdomgkenhinolocfifgehidddafch', 'Browserpass', 'icons/icon.svg'],
    ['bmikpgodpkclnkgmnpphehdgcimmided', 'NordPass', 'icons/icon-128.png'],
    ['fmhmiaejopepamlcjkncpgpdjichnecm', 'KeePass Tusk', 'icon128.png'],
    ['oboonakemofpalcgghocfoadofidjkkk', 'KeePassXC', 'icons/keepassxc_128.png'],
    ['pdffhmdngciaglkoonimfcmckehcpafo', 'Keeper', 'vault/vault.html'],
    ['dkbkbdpljkggbfajnaokngdjnphchdae', 'Enpass', 'images/icon128.png'],
    ['gnjhcjfggfpjpfljkbofmkgdedlehemj', 'LogMeOnce', 'images/logo_128.png'],
    ['chgfefjpcobfbnpmiokfjjaglahmnded', 'Avira Password', 'icons/icon128.png'],
    ['imloifkgjagghnncjkhggdhalmcnfklk', 'True Key', 'images/icon128.png'],
    ['lgbjhdkjmpgjgcpnibgmckjpfhfaaoil', 'Zoho Vault', 'icon128.png'],

    // === VPN & PRIVACY (40+) ===
    ['majdfhpaihoncoakbjgbdhglocklcgno', 'NordVPN', 'assets/images/main/logo.svg'],
    ['bihmplhobchoageeokmgbdihknkjbknd', 'ExpressVPN', 'images/icon-128.png'],
    ['bkdgflcldnnnapblkhphbgpggdiikppg', 'DuckDuckGo Privacy', 'img/logo-128.png'],
    ['gcbommkclmclpchllfjekcdonpmejbdp', 'HTTPS Everywhere', 'pages/popup.html'],
    ['pkehgijcmpdhfbdbbnkijodmdjhbjlgp', 'Privacy Badger', 'skin/popup.html'],
    ['mlomiejdfkolichcflejclcbmpeaniij', 'Ghostery', 'app/templates/setup.html'],
    ['gppongmhjkpfnbhagpmjfkondtafpam', 'Avast Online Security', 'common/images/logo.png'],
    ['nlbejmccbhkncgokjcmghpfloaajcffj', 'Windscribe VPN', 'icon128.png'],
    ['eppiocemhmnlbhjplcgkofciiegomcon', 'ZenMate VPN', 'img/logo_full.svg'],
    ['ffbkglfijbcbgblgflchnbphjpcdallg', 'Hotspot Shield VPN', 'icons/icon128.png'],
    ['kpiecbcckbofpmkkkdibbllpinceiihk', 'CyberGhost VPN', 'images/icon128.png'],
    ['ldbkdiaklndhfgffjffjhfjmopbfphcl', 'Touch VPN', 'images/icon128.png'],
    ['jgfpnndjfobhdifcdejhoacpoinhaoae', 'SetupVPN', 'images/icon128.png'],
    ['fcfhplploccackoneaefokcmbjfbkenj', 'Urban VPN', 'icons/icon128.png'],
    ['lnfdkdockbnblikdnbpmcijnaklgekif', 'Surfshark VPN', 'assets/icon128.png'],
    ['dpplabbmogkhghncfbfdeeokoefdjegm', 'Proton VPN', 'icons/icon128.png'],
    ['oiigbmnaadbkfbmpbfijlflahbdbdgdf', 'ScriptSafe', 'images/icon128.png'],
    ['cimiefiiaegbelhefglklhhakcgmhkai', 'Decentraleyes', 'resources/images/logo.png'],
    ['ogfhamlflocifeiifghkfhbfpiohjnfi', 'ClearURLs', 'icons/icon128.png'],
    ['lckanjgmijmafbedllaakclkaicjfmnk', 'ClearURLs (alt)', 'icons/icon.png'],
    ['jldhpllghnbhlbpcmnajkpdmadaolakh', 'TunnelBear VPN', 'images/bear-128.png'],
    ['knldjmfmopnpolahpmmgbagdohdnhkik', 'Mercury Reader', 'icon-128.png'],
    ['doojmbjmlfjjnbmnoijecmcbfeoakpjm', 'NoScript Security', 'skin/noscript64.png'],
    ['fgddmllnllkalaagkghckoinaemmogpe', 'User Agent Switcher', 'icon128.png'],
    ['apmcjdmfalmkeohfgpgmehajclihhlob', 'Random User Agent', 'icons/icon128.png'],

    // === DEVELOPER TOOLS (60+) ===
    ['fmkadmapgofadopljbjfkapdkoienihi', 'React Developer Tools', 'main.html'],
    ['nhdogjmejiglipccpnnnanhbledajbpd', 'Vue.js devtools', 'devtools-background.html'],
    ['lmhkpmbekcpmknklioeibfkpmmfibljd', 'Redux DevTools', 'devpanel.html'],
    ['bfnaelmomeimhlpmgjnjophhpkkoljpa', 'Lighthouse', 'images/lighthouse-tiny.svg'],
    ['aicmkgpgakddgnaphhhpliifpcfhicfo', 'Postman Interceptor', 'icons/icon-48.png'],
    ['mooikfkahbdckldjjndioackbalphokd', 'Selenium IDE', 'icons/icon-128.png'],
    ['hgmloofddffdnphfgcellkdfbfbjeloo', 'Web Vitals', 'icon128.png'],
    ['pejkokffkapolfffcgbmdmhdelanoaih', 'Web Developer Checklist', 'images/icon128.png'],
    ['jnihajbhpnppcggbcgedagnkighmdlei', 'Angular DevTools', 'app/devtools-background.html'],
    ['bjfhmglciegochdpefhhlphglcehbmek', 'Apollo Client DevTools', 'panel.html'],
    ['liecbddmkiiihnedobmlmillhodjkdmb', 'WhatRuns', 'icons/icon-128.png'],
    ['llgaelhojddlhookfheamkmhhnndpbfd', 'BuiltWith', 'icon128.png'],
    ['dapjbgnjinbpoindlpdmhochffioedbn', 'Wappalyzer', 'images/icons/icon-128.png'],
    ['hdbipekpdpggjaipompnomhccfemaljm', 'Web Developer', 'toolbar.html'],
    ['mcgbeeipkmelnpldkobichboakdfaeon', 'Ember Inspector', 'devtools.html'],
    ['ienfalfjdbdpebioblfackkekamfmbnh', 'Angular Augury', 'app/icon.png'],
    ['gbkffbkamcejhkcaocmkdeiiccpmjfdi', 'ModHeader', 'icon128.png'],
    ['jnkmfdileelhofjcijamephohjechhna', 'EditThisCookie', 'icon_128.png'],
    ['fhbjgbiflinjbdggehcddcbncdddomop', 'Cookie Editor', 'icon128.png'],
    ['pkgccpejnmalmdinmhkkfafefagiiiad', 'Cookie Manager', 'icon128.png'],
    ['aandamdpngkkbpgjbfaelcapfhgaejcl', 'Charset', 'icons/icon128.png'],
    ['bfbameneiokkgbdmiekhjnmfkcnldhhm', 'Page Ruler Redux', 'icon128.png'],
    ['gpbomhllbpcdampfnihajckhjlfaphni', 'PerfectPixel', 'icon128.png'],
    ['fdpohaocaechififmbbbbbknoalclacl', 'ColorZilla', 'icon128.png'],
    ['gkkpgknbhbggjjcollmlglimgiojocfi', 'Eye Dropper', 'icon128.png'],
    ['hajanaajapkhaabfcofdjgjnlgkdkknm', 'Colorzilla (alt)', 'icon-128.png'],
    ['hlepfoohegkhhmjieoechaddaejaokhf', 'Refined GitHub', 'extension.css'],
    ['njopapoodmifmcogpingplfphojnfeea', 'OctoLinker', 'icon-128.png'],
    ['bkhaagjahfmjljalopjnoealnfndnagc', 'Octotree', 'icons/icon128.png'],
    ['ijmgpimodfbpppknibmpogoioigcifii', 'Codota', 'icon128.png'],
    ['nhdoamobhfbcfhjcbnljboidopbmjepi', 'Sourcegraph', 'img/sourcegraph-mark.svg'],
    ['eimadpbcbfnmbkopoojfekhnkhdbieeh', 'Dark Reader', 'ui/popup/index.html'],
    ['bhlhnicpbhignbdhedgjhgdocnmhomnp', 'ColorPick Eyedropper', 'icon128.png'],

    // === GOOGLE EXTENSIONS (25+) ===
    ['ghbmnnjooekpmoecnnnilnnbdlolhkhi', 'Google Docs Offline', 'main.css'],
    ['aapbdbdomjkkjkaonfhkkikfgjllcleb', 'Google Translate', 'popup_css_compiled.css'],
    ['mclkkofklkfljcocdinagocijmpgbhab', 'Google Meet Enhancement', 'style.css'],
    ['aohghmighlieiainnegkcijnfilokake', 'Google Docs', 'img/docs_2020q4_48dp.png'],
    ['felcaaldnbdncclmgdcncolpebgiejap', 'Google Sheets', 'img/sheets_2020q4_48dp.png'],
    ['aapocclcgogkmnckokdopfmhonfmgoek', 'Google Slides', 'img/slides_2020q4_48dp.png'],
    ['hmjkmjkepdijhoojdojkdfohbdgmmhki', 'Google Keep', 'icon128.png'],
    ['mmeijimgabbpbgpdklnllpncmdofkcpn', 'Google Dictionary', 'icon128.png'],
    ['gbkeegbaiigmenfmjfclcdgdpimamgkj', 'Google Scholar', 'icon128.png'],
    ['efaidnbmnnnibpcajpcglclefindmkaj', 'Adobe Acrobat', 'viewer.html'],
    ['pnoffddplpippgcfjdhbmhkofpnaalpg', 'Google Arts & Culture', 'icon128.png'],
    ['nkbihfbeogaeaoehlefnkodbefgpgknn', 'MetaMask', 'popup.html'],
    ['bfnaelmomeimhlpmgjnjophhpkkoljpa', 'Chromecast', 'images/icon-128.png'],
    ['apdfllckaahabafndbhieahigkjlhalf', 'Google Drive', 'icon128.png'],
    ['blpcfgokakmgnkcojhhkbfbldkacnbeo', 'YouTube', 'icon128.png'],
    ['pjkljhegncpnkkknowihdjmlfcnijino', 'Google Calendar', 'icon128.png'],
    ['chlffgpmiacpedhhbkiomidkjlcfhogd', 'Google Plus', 'icon128.png'],
    ['gomekmidlodglbbmalcneegieacbdmki', 'Google Tasks', 'icon128.png'],
    ['icppfcnhkcmnfdhfhphakoifcfokfdhg', 'Google Shopping', 'icon128.png'],
    ['oeopbcgkkoapgobdbedcemjljbihmemj', 'Google Hangouts', 'icons/128.png'],
    ['nckgahadagoaajjgafhacjanaoiihapd', 'Google Recorder', 'icon128.png'],

    // === PRODUCTIVITY (80+) ===
    ['enamippconapkdmgjgmbhapdfjfhdncn', 'Grammarly', 'src/images/elogo.svg'],
    ['nenlahapcbofgnanklpelkaejcehkggg', 'Honey', 'paypal-icon.svg'],
    ['chhjbpecpncaggjpdakmflnfcopglcmi', 'Rakuten', 'images/icon-128.png'],
    ['mgijmajocgfcbeboacabfgobmjgjcoja', 'Google Dictionary', 'icon128.png'],
    ['klbibkeccnjlkjkiokjodocebajanakg', 'Great Suspender', 'suspend.html'],
    ['oknpjjbmpnndlpmnhmekjpocelpnlfdi', 'Momentum', 'momentum.html'],
    ['laookkfknpbbblfpciffpaejjkokdgca', 'Momentum Dashboard', 'dashboard.html'],
    ['lpcaedmchfhocbbapmcbpinfpgnhiddi', 'Nimbus Screenshot', 'icon128.png'],
    ['goficmpcgcnombioohjcgdhbaloknabb', 'GoFullPage', 'page.svg'],
    ['jfiflfkplolnjbchadagjnjkpplnfabo', 'Awesome Screenshot', 'img/logo-128.png'],
    ['cpngackimfmofbokmjmljamhdncknpmg', 'Fireshot', 'icon128.png'],
    ['felcaaldnbdncclmgdcncolpebgiejap', 'Screencastify', 'icon128.png'],
    ['mmeijimgabbpbgpdklnllpncmdofkcpn', 'Loom', 'icon128.png'],
    ['igbncjcgfkfnfgbaieiimpfkobabmkce', 'Evernote Web Clipper', 'icon128.png'],
    ['lbfehkoinhhcknnbdgnnmjhiladcgbol', 'Notion Web Clipper', 'icon128.png'],
    ['agjnjboanicjcpenljmaaigopkgdnihi', 'Todoist', 'icon128.png'],
    ['kfgncblgjmpophbkjclmnlbdahjlokhc', 'Wunderlist', 'img/icon_128.png'],
    ['hddnkoipeenegfoeaoibdmnaalmgkpip', 'Save to Pocket', 'icon128.png'],
    ['gbchcmhmhahfdphkhkmpfmihenigjmpp', 'Instapaper', 'icon128.png'],
    ['onlgmecjpnejhfeofkgbfgnmdlipdejb', 'Readwise', 'icon-128.png'],
    ['kdfieneakcjfaiglcfcgkidlkmlijjnh', 'Liner', 'icon128.png'],
    ['pnjaodmkngahhkoihejjehlcdlnohgmp', 'Weava Highlighter', 'icon128.png'],
    ['hldjnlbobkdkghfidgoecgmklcemanhm', 'HyperWrite', 'icon128.png'],
    ['oldceeleldhonbafppcapldpdifcinji', 'LanguageTool', 'assets/icon.svg'],
    ['gfdkkolaenijbiocemkalfpmjglkblnl', 'ProWritingAid', 'icon128.png'],
    ['mgmcddfpobkghipangdpjeighmggcooa', 'Wordtune', 'icon128.png'],
    ['mhkhmbddkmdggbhaaaodilponhnccicb', 'Copy All URLs', 'icon128.png'],
    ['dmkamcknogkgcdfhhbddcghachkejeap', 'Kiwi for Gmail', 'icon128.png'],
    ['ggpfgbedjhjpnllokhgagammkbhojfce', 'Checker Plus for Gmail', 'icon128.png'],

    // === SOCIAL MEDIA (40+) ===
    ['gebbhagfogifgggkldgodflihgfeippi', 'Facebook Notifier', 'icon128.png'],
    ['hcbgadmbdkiilgpifjgcakjehmafcjai', 'Facebook Container', 'icon.svg'],
    ['jdjbiojkklnaeoanimopafmnmhldejbg', 'LikeBlock', 'icon128.png'],
    ['egnjhciaieeiiohknchakcodbpgjnchh', 'Social Fixer', 'icon128.png'],
    ['fdkghdkpcdhjfjbcgfhahndmkmmilkkh', 'Twitter Blocker', 'icon128.png'],
    ['kdbmhfkmnlmbkgbabkdealhhbfhlmmon', 'Buffer', 'icon128.png'],
    ['angjmncdicjedpjcapomhnjeinkhdddf', 'Hootsuite', 'icon128.png'],
    ['mgdgfbhlehnojohpfhjmblkbdiofiagl', 'SocialBee', 'icon128.png'],
    ['dmdcpbjmagfpcmfljnmhgokgbkamaoob', 'Facebook Purity', 'icon128.png'],
    ['kclpbknaleeeknjpldofigkiaijpicca', 'LinkedIn Helper', 'icon128.png'],
    ['dgjjkbjiigcgjgbiadhmhbbfapaaocki', 'Dux-Soup', 'icon128.png'],
    ['gfmjmkdcbekmahhlhmmpnnlbhfllchpf', 'Phantombuster', 'icon128.png'],
    ['jnmnbpnikacpjfdgiefcfoknbaghibmi', 'TweetDeck', 'icon128.png'],
    ['hpcmjknpfhpfcfcnkigmhadhdjbbeknh', 'Black Menu for Google', 'icon128.png'],

    // === VIDEO & MEDIA (50+) ===
    ['liecbddmkiiihnedobmlmillhodjkdmb', 'Video DownloadHelper', 'icons/icon-19.png'],
    ['bjjkibojficifknhlejmjnpcnfjfinal', 'Enhancer for YouTube', 'resources/icon/icon32.png'],
    ['bdokagampppgbnjfdlkfpphniapiiehe', 'Video Speed Controller', 'inject.css'],
    ['gebbhagfogifgggkldgodflihgfeippi', 'SponsorBlock', 'icon128.png'],
    ['mnjggcdmjocbbbhaepdhchncahnbgone', 'Magic Actions YouTube', 'icon128.png'],
    ['cimiefiiaegbelhefglklhhakcgmhkai', 'Turn Off the Lights', 'icon128.png'],
    ['pioclpoplcdbaefihamjohnefbikjilc', 'Pop up blocker for Chrome', 'icon128.png'],
    ['padekgcemlokbadohgkifijomclgjgif', 'Enhancer for Netflix', 'icon128.png'],
    ['fjihgldobfpnpphioaohpgplbflhffgm', 'Netflix Party', 'icon128.png'],
    ['oocalimimngaihdkbihfgmpkcpnmlaoa', 'Teleparty', 'icon128.png'],
    ['mejbgkdnlnmmgkajefmnnakipmmhpnmp', 'Picture-in-Picture', 'icon128.png'],
    ['eocllbljlfncemnejhbbgbonmjdaogho', 'Return Dislike Button', 'icon128.png'],
    ['fdpohaocaechififmbbbbbknoalclacl', 'Audio Equalizer', 'icon128.png'],
    ['bepbmhgboaologfdajaanbcjmnhjmhfn', 'Shazam', 'icon128.png'],
    ['idiapmnjmcojgnbhfipmojopkmjffpkn', 'Volume Booster', 'icon128.png'],
    ['gonlbnkeinmjmdhjgagoipbmjhmfkbce', 'Spotify Player', 'icon128.png'],

    // === SHOPPING & DEALS (30+) ===
    ['hggdhbpbkffckaebncnlfngllocjihhf', 'Capital One Shopping', 'icon128.png'],
    ['jjfblogammkiefalfpafidabbnamoknm', 'Coupert', 'icon128.png'],
    ['bmnlcjabgnpnenekpadlanbbkooimhnj', 'RetailMeNot', 'icon128.png'],
    ['ghogcnbemhklfhppdldmcjdpgejocefi', 'SlickDeals', 'icon128.png'],
    ['pflphaooapbgpeakohlggbpidpppgdff', 'CamelCamelCamel', 'icon128.png'],
    ['booedmolknjekdopkepjmecidcggbkge', 'Invisible Hand', 'icon128.png'],
    ['jbedlcohjnogjampcmdgdlocmkaglbmf', 'AliTools', 'icon128.png'],
    ['epmidmfiaogakpejmjdiejfhfiodbhlf', 'Fakespot', 'icon128.png'],
    ['ckibcdccnfeookdmbahgiakhnjcddpki', 'ReviewMeta', 'icon128.png'],
    ['jigkoeignacggonadlclofpkpjfonkmc', 'PriceBlink', 'icon128.png'],

    // === TAB MANAGEMENT (25+) ===
    ['hcbgadmbdkiilgpifjgcakjehmafcjai', 'Tab Session Manager', 'popup/popup.html'],
    ['padekgcemlokbadohgkifijomclgjgif', 'OneTab', 'icon128.png'],
    ['eggkanocgddhmamlbiijnphhppkpkmkl', 'Tab Wrangler', 'icon128.png'],
    ['gcknhkkoolaabfmlnjonogaaifnjlfnp', 'Toby', 'icon128.png'],
    ['nnbmlagghjjcbdhgmkedmbmedengocbn', 'Tab Manager Plus', 'icon128.png'],
    ['iaiomicjabeggjcfkbimgmglanimpnae', 'Cluster', 'icon128.png'],
    ['hkhkmbhonmoalglmgjmdlgmfnpcbncol', 'Workona', 'icon128.png'],
    ['kdcjpgbickmgaeaaodakepoincpaikab', 'Spaces', 'icon128.png'],
    ['cpediemannobginkbpbdbljfpffnolef', 'Session Buddy', 'icon128.png'],
    ['gbmlfnjpbhbaojaelmfpagfhcoboefpk', 'TooManyTabs', 'icon128.png'],

    // === JSON & DATA TOOLS (15+) ===
    ['bcjindcccaagfpapjjmafapmmgkkhgoa', 'JSON Formatter', 'icon128.png'],
    ['oebamiebflghncgokncljhbchlodjpma', 'JSON Viewer Pro', 'images/icon-128.png'],
    ['aimiinbnnkboelefkjlenlgimcabobli', 'JSON Editor', 'icon128.png'],
    ['hdmbdioamgdkppmocchpkjhbpfmpjiei', 'JSONView', 'icon128.png'],
    ['chklaanhfefbnpoihckbnefhakgolnmc', 'YAML Editor', 'icon128.png'],
    ['legimlagjjoghkoaeppmbpkigppooiml', 'XML Viewer', 'icon128.png'],

    // === AUTOMATION (20+) ===
    ['infppggnoaenmfagbfknfkancpbljcca', 'Automa', 'newtab.html'],
    ['gcalenpjmijncebpfijmoaglllgpjagf', 'iMacros', 'icon128.png'],
    ['aapbdbdomjkkjkaonfhkkikfgjllcleb', 'Web Scraper', 'icon128.png'],
    ['dhdgffkkebhmkfjojejmpbldmpobfkfo', 'Tampermonkey', 'images/icon.png'],
    ['gcalenpjmijncebpfijmoaglllgpjagf', 'Greasemonkey', 'icon128.png'],
    ['hipekcciheckooncpjeljhnekcoolahp', 'Violentmonkey', 'icon128.png'],
    ['ljdobmomdgdljniocdpbbhdcfogoonpe', 'Stylish', 'icon128.png'],
    ['clngdbkpkpeebahjckkjfobafhncgmne', 'Stylus', 'icon128.png'],
    ['nbhcbdghjpllgmfilhnhkllmkecfmpld', 'Page Monitor', 'icon128.png'],
    ['agghpkjcpgdmfbhpkpmbanfjocpkdnmo', 'Distill', 'icon128.png'],

    // === CRYPTOCURRENCY (20+) ===
    ['nkbihfbeogaeaoehlefnkodbefgpgknn', 'MetaMask', 'popup.html'],
    ['ibnejdfjmmkpcnlpebklmnkoeoihofec', 'TronLink', 'icon128.png'],
    ['fhbohimaelbohpjbbldcngcnapndodjp', 'Binance Wallet', 'icon128.png'],
    ['bfnaelmomeimhlpmgjnjophhpkkoljpa', 'Coinbase Wallet', 'icon128.png'],
    ['egjidjbpglichdcondbcbdnbeeppgdph', 'Trust Wallet', 'icon128.png'],
    ['dlcobpjiigpikoobohmabehhmhfoodbb', 'Argent X', 'icon128.png'],
    ['aiifbnbfobpmeekipheeijimdpnlpgpp', 'Phantom', 'icon128.png'],
    ['fldfpgipfncgndfolcbkdeeknbbbnhcc', 'Sollet', 'icon128.png'],
    ['jnmbobjmhlngoefaiojfljckilhhlhcj', 'Keplr', 'icon128.png'],
    ['dmkamcknogkgcdfhhbddcghachkejeap', 'Rabby', 'icon128.png'],
    ['fnjhmkhhmkbjkkabndcnnogagogbneec', 'Rainbow', 'icon128.png'],
    ['kkpllkodjeloidieedojogacfhpaihoh', 'Slope Wallet', 'icon128.png'],

    // === READING & RESEARCH (30+) ===
    ['knldjmfmopnpolahpmmgbagdohdnhkik', 'Mercury Reader', 'icon-128.png'],
    ['gbjecgddpffhenhlhhklenocogcjamjl', 'Just Read', 'icon128.png'],
    ['pacgcjfpomobilfnonkfpcomldhcipjf', 'Reader Mode', 'icon128.png'],
    ['cbimabofgmfdkicghcadidpemeenbffn', 'Paperpile', 'icon128.png'],
    ['pcmpcfapbekmbjjkdalcgopdkipoggdi', 'Mendeley', 'icon128.png'],
    ['hhhpdkekipnbloiiiiaokibebpdpakdp', 'Zotero Connector', 'icon128.png'],
    ['oldceeleldhonbafppcapldpdifcinji', 'Cite This For Me', 'icon128.png'],
    ['nplmfcdmgbllmebpjhmnceljncejmnaf', 'RefWorks', 'icon128.png'],
    ['lhkphpobahkpkfehpbfjophkeiojjiio', 'Scholar Reader', 'icon128.png'],
    ['oemmndcbldboiebfnladdacbdfmadadm', 'PDF Viewer', 'icon128.png'],

    // === EMAIL & COMMUNICATION (25+) ===
    ['ggpfgbedjhjpnllokhgagammkbhojfce', 'Checker Plus Gmail', 'icon128.png'],
    ['kmnahpohoangnkllmnajngdboelmpmfl', 'Mailtrack', 'icon128.png'],
    ['bikioccmkafdpakkkcpdbppfkghcmihk', 'Hubspot Sales', 'icon128.png'],
    ['jdjildjkdpmbbdhcgmhbbkibfpklggje', 'Yesware', 'icon128.png'],
    ['bikioccmkafdpakkkcpdbppfkghcmihk', 'Mixmax', 'icon128.png'],
    ['pioclpoplcdbaefihamjohnefbikjilc', 'Streak for Gmail', 'icon128.png'],
    ['gkjnkapjmjfpjclcelldcifffkhcmjmi', 'Boomerang', 'icon128.png'],
    ['oeopbcgkkapkdphmjjmkdakpddekplkf', 'Clearbit', 'icon128.png'],
    ['mhfphkdcbmniaoknbcfifagjbdndkfih', 'Rapportive', 'icon128.png'],

    // === ACCESSIBILITY (15+) ===
    ['mgijmajocgfcbeboacabfgobmjgjcoja', 'High Contrast', 'icon128.png'],
    ['mpbbgehkmhlidgabmemhioahanilhphk', 'Color Enhancer', 'icon128.png'],
    ['mlbhppedgmnkblodgjhkkkkliecmfjci', 'Dyslexia Friendly', 'icon128.png'],
    ['kpaoloklafblmjncklhembfioacfbcjj', 'Screen Shader', 'icon128.png'],
    ['iiopafembnnfppicddcahdolofkhkamn', 'f.lux', 'icon128.png'],
    ['lkbebcjgcmobigpeffafkodonchffocl', 'Zoom Text Only', 'icon128.png'],
    ['gcjikeldobhnaglcoaejmdlmbienoocg', 'VisBug', 'icon128.png'],

    // === MISCELLANEOUS (40+) ===
    ['bkkbcggnhapdmkeljlodobbkopceiche', 'WhatFont', 'css/toolbar.css'],
    ['nllpnhagllcjblmljlccfcnhghmbngpb', 'Mobile Simulator', 'icon128.png'],
    ['hdannnflhlmdablckfkjpleikpphncik', 'Nimbus Notes', 'icon128.png'],
    ['hbdkkfheckcdppiaiabobmennhijkknn', 'Web Timer', 'icon128.png'],
    ['laankejkbhbdhmipfmgcngdelahlfoji', 'StayFocusd', 'icon128.png'],
    ['mjdepdfccjgcndkmemponafgioodelna', 'Just Focus', 'icon128.png'],
    ['ngpfpkndllhgbkhiignhphenjjmcnahl', 'RescueTime', 'icon128.png'],
    ['oocalimimngaihdkbihfgmpkcpnmlaoa', 'WasteNoTime', 'icon128.png'],
    ['lmckjpcaolllbmophmkgcckdpabfnpmk', 'LeechBlock NG', 'icon128.png'],
    ['dbepggeogbaibhgnhhndojpepiihcmeb', 'Vimium', 'icon128.png'],
    ['hdkhploaihpkofkflppmfogdhagaknoh', 'cVim', 'icon128.png'],
    ['dneaehbmnbhcippjikoajpoabadpodje', 'Old Reddit Redirect', 'icon128.png'],
    ['kbmfpngjjgdllneeigpgjifpgocmfgmb', 'Reddit Enhancement Suite', 'icon128.png'],
    ['nibjojkomfdiaoajekhjakgkdhaomnch', 'Pushbullet', 'icon128.png'],
    ['lfmhphfpdnlbmlkampphibholdppabmi', 'Simplify Gmail', 'icon128.png'],
    ['gkkmiofalnjagdcjheckamobghglpdpm', 'Briskine', 'icon128.png'],
    ['ahknadgdhmndnhhljpnobokfcgcgfmga', 'Text Blaze', 'icon128.png'],
    ['jnhgnonknehpejjnehehllkliplmbmhn', 'Auto Text Expander', 'icon128.png'],
    ['nlkoigofdjpioajfchgobkjmhgkpommk', 'Wordsmith', 'icon128.png']
];

// Export as simple array for quick lookup
export const EXTENSION_IDS = CHROME_EXTENSIONS.map(e => e[0]);

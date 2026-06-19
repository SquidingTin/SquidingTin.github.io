export const mail = {
	html: `
<!DOCTYPE html>
<html>
<head>
    <style>
    body {
        margin: 0;
        font-family: "Courier New", monospace;
        background: #3b2f2f;
        color: white;
        background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("blocks/Ender_Chest_top_block.png");
        background-size: 64px 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow: hidden;
    }

    .mailbox {
        width: 90vw;
        height: 80vh;
        background: rgba(0,0,0,0.6);
        border: 4px solid #2e7d32;
        display: flex;
        overflow: hidden;
        align-items: stretch;
    }

    input[type="radio"] {
        display: none;
    }

    .categories {
        width: 180px;
        border-right: 3px solid #1b5e20;
        background: rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;
    }

    .categories label {
        padding: 15px;
        cursor: pointer;
        border-bottom: 1px solid #2e7d32;
    }

    .categories label:hover {
        background: rgba(46,125,50,0.4);
    }

    .categories label.sub-label {
        padding: 5px !important;
        padding-left: 10px;
        font-size: 13px;
    }

    .inbox {
        width: 300px;
        border-right: 3px solid #1b5e20;
        overflow-y: auto;
    }

    .mail {
        display: block;
        padding: 15px;
        cursor: pointer;
        border-bottom: 1px solid #2e7d32;
        background: rgba(0,0,0,0.15);
    }

    .mail:hover {
        background: rgba(46,125,50,0.4);
    }

    .mail-title { font-weight: bold; }
    .mail-sub { color: #ccc; font-size: 14px; }

    .viewer {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
    }

    .viewer-panel { display: none; }

    h2 { color: #ff5555; margin-top: 0; }

    .mail.spam { font-style: italic; }
    .mail.trash { opacity: 0.6; font-style: italic; }

    #none:checked ~ .viewer .default { display: block; }


    #m1:checked ~ .viewer .m1 {
        display: block;
    }


    #m2:checked ~ .viewer .m2 {
        display: block;
    }


    #m3:checked ~ .viewer .m3 {
        display: block;
    }


    #m4:checked ~ .viewer .m4 {
        display: block;
    }


    #m5:checked ~ .viewer .m5 {
        display: block;
    }


    #m6:checked ~ .viewer .m6 {
        display: block;
    }


    #m7:checked ~ .viewer .m7 {
        display: block;
    }


    #m8:checked ~ .viewer .m8 {
        display: block;
    }


    #m9:checked ~ .viewer .m9 {
        display: block;
    }


    #m10:checked ~ .viewer .m10 {
        display: block;
    }


    #m11:checked ~ .viewer .m11 {
        display: block;
    }


    #m12:checked ~ .viewer .m12 {
        display: block;
    }


    #m13:checked ~ .viewer .m13 {
        display: block;
    }


    #m14:checked ~ .viewer .m14 {
        display: block;
    }


    #m15:checked ~ .viewer .m15 {
        display: block;
    }


    #m16:checked ~ .viewer .m16 {
        display: block;
    }


    #m17:checked ~ .viewer .m17 {
        display: block;
    }


    #m18:checked ~ .viewer .m18 {
        display: block;
    }


    #m19:checked ~ .viewer .m19 {
        display: block;
    }


    #m20:checked ~ .viewer .m20 {
        display: block;
    }


    #m21:checked ~ .viewer .m21 {
        display: block;
    }


    #m22:checked ~ .viewer .m22 {
        display: block;
    }


    #m23:checked ~ .viewer .m23 {
        display: block;
    }


    #m24:checked ~ .viewer .m24 {
        display: block;
    }


    #m25:checked ~ .viewer .m25 {
        display: block;
    }


    #m26:checked ~ .viewer .m26 {
        display: block;
    }


    #m27:checked ~ .viewer .m27 {
        display: block;
    }


    #m28:checked ~ .viewer .m28 {
        display: block;
    }


    #m29:checked ~ .viewer .m29 {
        display: block;
    }


    #m30:checked ~ .viewer .m30 {
        display: block;
    }


    #m31:checked ~ .viewer .m31 {
        display: block;
    }


    #m32:checked ~ .viewer .m32 {
        display: block;
    }


    #m33:checked ~ .viewer .m33 {
        display: block;
    }


    #m34:checked ~ .viewer .m34 {
        display: block;
    }


    #m35:checked ~ .viewer .m35 {
        display: block;
    }


    #m36:checked ~ .viewer .m36 {
        display: block;
    }


    #m37:checked ~ .viewer .m37 {
        display: block;
    }


    #m38:checked ~ .viewer .m38 {
        display: block;
    }


    #m39:checked ~ .viewer .m39 {
        display: block;
    }


    #m40:checked ~ .viewer .m40 {
        display: block;
    }


    #m41:checked ~ .viewer .m41 {
        display: block;
    }


    #m42:checked ~ .viewer .m42 {
        display: block;
    }


    #m43:checked ~ .viewer .m43 {
        display: block;
    }


    #m44:checked ~ .viewer .m44 {
        display: block;
    }


    #m45:checked ~ .viewer .m45 {
        display: block;
    }


    #m46:checked ~ .viewer .m46 {
        display: block;
    }


    #m47:checked ~ .viewer .m47 {
        display: block;
    }


    #m48:checked ~ .viewer .m48 {
        display: block;
    }


    #m49:checked ~ .viewer .m49 {
        display: block;
    }


    #m50:checked ~ .viewer .m50 {
        display: block;
    }


    #m51:checked ~ .viewer .m51 {
        display: block;
    }


    #m52:checked ~ .viewer .m52 {
        display: block;
    }


    #m53:checked ~ .viewer .m53 {
        display: block;
    }


    #m54:checked ~ .viewer .m54 {
        display: block;
    }


    #m55:checked ~ .viewer .m55 {
        display: block;
    }


    #m56:checked ~ .viewer .m56 {
        display: block;
    }


    #m57:checked ~ .viewer .m57 {
        display: block;
    }


    #m58:checked ~ .viewer .m58 {
        display: block;
    }


    #m59:checked ~ .viewer .m59 {
        display: block;
    }


    #m60:checked ~ .viewer .m60 {
        display: block;
    }


    #m61:checked ~ .viewer .m61 {
        display: block;
    }


    #m62:checked ~ .viewer .m62 {
        display: block;
    }


    #m63:checked ~ .viewer .m63 {
        display: block;
    }


    #m64:checked ~ .viewer .m64 {
        display: block;
    }


    #m65:checked ~ .viewer .m65 {
        display: block;
    }


    #m66:checked ~ .viewer .m66 {
        display: block;
    }


    #m67:checked ~ .viewer .m67 {
        display: block;
    }


    #m68:checked ~ .viewer .m68 {
        display: block;
    }


    #m69:checked ~ .viewer .m69 {
        display: block;
    }


    #m70:checked ~ .viewer .m70 {
        display: block;
    }


    #m71:checked ~ .viewer .m71 {
        display: block;
    }


    #m72:checked ~ .viewer .m72 {
        display: block;
    }


    #m73:checked ~ .viewer .m73 {
        display: block;
    }


    #m74:checked ~ .viewer .m74 {
        display: block;
    }


    #m75:checked ~ .viewer .m75 {
        display: block;
    }


    #m76:checked ~ .viewer .m76 {
        display: block;
    }


    #m77:checked ~ .viewer .m77 {
        display: block;
    }


    #m78:checked ~ .viewer .m78 {
        display: block;
    }


    #m79:checked ~ .viewer .m79 {
        display: block;
    }


    #m80:checked ~ .viewer .m80 {
        display: block;
    }


    #m81:checked ~ .viewer .m81 {
        display: block;
    }


    #m82:checked ~ .viewer .m82 {
        display: block;
    }


    #m83:checked ~ .viewer .m83 {
        display: block;
    }


    #m84:checked ~ .viewer .m84 {
        display: block;
    }


    #m85:checked ~ .viewer .m85 {
        display: block;
    }


    #m86:checked ~ .viewer .m86 {
        display: block;
    }


    #m87:checked ~ .viewer .m87 {
        display: block;
    }


    #m88:checked ~ .viewer .m88 {
        display: block;
    }


    #m89:checked ~ .viewer .m89 {
        display: block;
    }


    #m90:checked ~ .viewer .m90 {
        display: block;
    }


    #m91:checked ~ .viewer .m91 {
        display: block;
    }


    #m92:checked ~ .viewer .m92 {
        display: block;
    }


    #m93:checked ~ .viewer .m93 {
        display: block;
    }


    #m94:checked ~ .viewer .m94 {
        display: block;
    }


    #m95:checked ~ .viewer .m95 {
        display: block;
    }


    #m96:checked ~ .viewer .m96 {
        display: block;
    }


    #m97:checked ~ .viewer .m97 {
        display: block;
    }


    #m98:checked ~ .viewer .m98 {
        display: block;
    }


    #m99:checked ~ .viewer .m99 {
        display: block;
    }


    #m100:checked ~ .viewer .m100 {
        display: block;
    }


    #m101:checked ~ .viewer .m101 {
        display: block;
    }


    #m102:checked ~ .viewer .m102 {
        display: block;
    }


    #m103:checked ~ .viewer .m103 {
        display: block;
    }


    #m104:checked ~ .viewer .m104 {
        display: block;
    }


    #m105:checked ~ .viewer .m105 {
        display: block;
    }


    #m106:checked ~ .viewer .m106 {
        display: block;
    }


    #m107:checked ~ .viewer .m107 {
        display: block;
    }


    #m108:checked ~ .viewer .m108 {
        display: block;
    }


    #m109:checked ~ .viewer .m109 {
        display: block;
    }


    #m110:checked ~ .viewer .m110 {
        display: block;
    }


    #m111:checked ~ .viewer .m111 {
        display: block;
    }


    #m112:checked ~ .viewer .m112 {
        display: block;
    }


    #m113:checked ~ .viewer .m113 {
        display: block;
    }


    #m114:checked ~ .viewer .m114 {
        display: block;
    }


    #m115:checked ~ .viewer .m115 {
        display: block;
    }


    #cat-all:checked ~ .inbox .mail {
        display: none;
    }

    #cat-all:checked ~ .inbox .mail:not(.spam):not(.trash) {
        display: block;
    }


    #cat-news:checked ~ .inbox .mail {
        display: none;
    }

    #cat-news:checked ~ .inbox .mail.news {
        display: block;
    }


    #cat-updates:checked ~ .inbox .mail {
        display: none;
    }

    #cat-updates:checked ~ .inbox .mail.updates {
        display: block;
    }


    #cat-promotional:checked ~ .inbox .mail {
        display: none;
    }

    #cat-promotional:checked ~ .inbox .mail.promotional {
        display: block;
    }


    #cat-spam:checked ~ .inbox .mail {
        display: none;
    }

    #cat-spam:checked ~ .inbox .mail.spam {
        display: block;
    }


    #cat-trash:checked ~ .inbox .mail {
        display: none;
    }

    #cat-trash:checked ~ .inbox .mail.trash {
        display: block;
    }


    #sub-Mesa_Times:checked ~ .inbox .mail:not(.Mesa_Times) {
        display: none;
    }


    #sub-Cactus_News:checked ~ .inbox .mail:not(.Cactus_News) {
        display: none;
    }


    #sub-Murkland_Times:checked ~ .inbox .mail:not(.Murkland_Times) {
        display: none;
    }


    #sub-Icy_News:checked ~ .inbox .mail:not(.Icy_News) {
        display: none;
    }


    #sub-Cherry_Bomb:checked ~ .inbox .mail:not(.Cherry_Bomb) {
        display: none;
    }


    #sub-Acorn:checked ~ .inbox .mail:not(.Acorn) {
        display: none;
    }


    #sub-Fatui:checked ~ .inbox .mail:not(.Fatui) {
        display: none;
    }


    #sub-International_News_Network:checked ~ .inbox .mail:not(.International_News_Network) {
        display: none;
    }


    #sub-Glacial_Press:checked ~ .inbox .mail:not(.Glacial_Press) {
        display: none;
    }


    #sub-Great_Sylven:checked ~ .inbox .mail:not(.Great_Sylven) {
        display: none;
    }


    #sub-Bedrock_Chronicle:checked ~ .inbox .mail:not(.Bedrock_Chronicle) {
        display: none;
    }


    #sub-Mushroom_Times:checked ~ .inbox .mail:not(.Mushroom_Times) {
        display: none;
    }


    #sub-Slime_Times:checked ~ .inbox .mail:not(.Slime_Times) {
        display: none;
    }

    </style>

    <div class="mailbox">

    <input type="radio" name="category" id="cat-all" checked>
    <input type="radio" name="category" id="cat-news">
    <input type="radio" name="category" id="cat-updates">
    <input type="radio" name="category" id="cat-promotional">
    <input type="radio" name="category" id="cat-spam">
    <input type="radio" name="category" id="cat-trash">
    <input type="radio" name="category" id="sub-Mesa_Times">
    <input type="radio" name="category" id="sub-Cactus_News">
    <input type="radio" name="category" id="sub-Murkland_Times">
    <input type="radio" name="category" id="sub-Icy_News">
    <input type="radio" name="category" id="sub-Cherry_Bomb">
    <input type="radio" name="category" id="sub-Acorn">
    <input type="radio" name="category" id="sub-Fatui">
    <input type="radio" name="category" id="sub-International_News_Network">
    <input type="radio" name="category" id="sub-Glacial_Press">
    <input type="radio" name="category" id="sub-Great_Sylven">
    <input type="radio" name="category" id="sub-Bedrock_Chronicle">
    <input type="radio" name="category" id="sub-Mushroom_Times">
    <input type="radio" name="category" id="sub-Slime_Times">
    <input type="radio" name="mail" id="none" checked>
    <input type="radio" name="mail" id="m1">
    <input type="radio" name="mail" id="m2">
    <input type="radio" name="mail" id="m3">
    <input type="radio" name="mail" id="m4">
    <input type="radio" name="mail" id="m5">
    <input type="radio" name="mail" id="m6">
    <input type="radio" name="mail" id="m7">
    <input type="radio" name="mail" id="m8">
    <input type="radio" name="mail" id="m9">
    <input type="radio" name="mail" id="m10">
    <input type="radio" name="mail" id="m11">
    <input type="radio" name="mail" id="m12">
    <input type="radio" name="mail" id="m13">
    <input type="radio" name="mail" id="m14">
    <input type="radio" name="mail" id="m15">
    <input type="radio" name="mail" id="m16">
    <input type="radio" name="mail" id="m17">
    <input type="radio" name="mail" id="m18">
    <input type="radio" name="mail" id="m19">
    <input type="radio" name="mail" id="m20">
    <input type="radio" name="mail" id="m21">
    <input type="radio" name="mail" id="m22">
    <input type="radio" name="mail" id="m23">
    <input type="radio" name="mail" id="m24">
    <input type="radio" name="mail" id="m25">
    <input type="radio" name="mail" id="m26">
    <input type="radio" name="mail" id="m27">
    <input type="radio" name="mail" id="m28">
    <input type="radio" name="mail" id="m29">
    <input type="radio" name="mail" id="m30">
    <input type="radio" name="mail" id="m31">
    <input type="radio" name="mail" id="m32">
    <input type="radio" name="mail" id="m33">
    <input type="radio" name="mail" id="m34">
    <input type="radio" name="mail" id="m35">
    <input type="radio" name="mail" id="m36">
    <input type="radio" name="mail" id="m37">
    <input type="radio" name="mail" id="m38">
    <input type="radio" name="mail" id="m39">
    <input type="radio" name="mail" id="m40">
    <input type="radio" name="mail" id="m41">
    <input type="radio" name="mail" id="m42">
    <input type="radio" name="mail" id="m43">
    <input type="radio" name="mail" id="m44">
    <input type="radio" name="mail" id="m45">
    <input type="radio" name="mail" id="m46">
    <input type="radio" name="mail" id="m47">
    <input type="radio" name="mail" id="m48">
    <input type="radio" name="mail" id="m49">
    <input type="radio" name="mail" id="m50">
    <input type="radio" name="mail" id="m51">
    <input type="radio" name="mail" id="m52">
    <input type="radio" name="mail" id="m53">
    <input type="radio" name="mail" id="m54">
    <input type="radio" name="mail" id="m55">
    <input type="radio" name="mail" id="m56">
    <input type="radio" name="mail" id="m57">
    <input type="radio" name="mail" id="m58">
    <input type="radio" name="mail" id="m59">
    <input type="radio" name="mail" id="m60">
    <input type="radio" name="mail" id="m61">
    <input type="radio" name="mail" id="m62">
    <input type="radio" name="mail" id="m63">
    <input type="radio" name="mail" id="m64">
    <input type="radio" name="mail" id="m65">
    <input type="radio" name="mail" id="m66">
    <input type="radio" name="mail" id="m67">
    <input type="radio" name="mail" id="m68">
    <input type="radio" name="mail" id="m69">
    <input type="radio" name="mail" id="m70">
    <input type="radio" name="mail" id="m71">
    <input type="radio" name="mail" id="m72">
    <input type="radio" name="mail" id="m73">
    <input type="radio" name="mail" id="m74">
    <input type="radio" name="mail" id="m75">
    <input type="radio" name="mail" id="m76">
    <input type="radio" name="mail" id="m77">
    <input type="radio" name="mail" id="m78">
    <input type="radio" name="mail" id="m79">
    <input type="radio" name="mail" id="m80">
    <input type="radio" name="mail" id="m81">
    <input type="radio" name="mail" id="m82">
    <input type="radio" name="mail" id="m83">
    <input type="radio" name="mail" id="m84">
    <input type="radio" name="mail" id="m85">
    <input type="radio" name="mail" id="m86">
    <input type="radio" name="mail" id="m87">
    <input type="radio" name="mail" id="m88">
    <input type="radio" name="mail" id="m89">
    <input type="radio" name="mail" id="m90">
    <input type="radio" name="mail" id="m91">
    <input type="radio" name="mail" id="m92">
    <input type="radio" name="mail" id="m93">
    <input type="radio" name="mail" id="m94">
    <input type="radio" name="mail" id="m95">
    <input type="radio" name="mail" id="m96">
    <input type="radio" name="mail" id="m97">
    <input type="radio" name="mail" id="m98">
    <input type="radio" name="mail" id="m99">
    <input type="radio" name="mail" id="m100">
    <input type="radio" name="mail" id="m101">
    <input type="radio" name="mail" id="m102">
    <input type="radio" name="mail" id="m103">
    <input type="radio" name="mail" id="m104">
    <input type="radio" name="mail" id="m105">
    <input type="radio" name="mail" id="m106">
    <input type="radio" name="mail" id="m107">
    <input type="radio" name="mail" id="m108">
    <input type="radio" name="mail" id="m109">
    <input type="radio" name="mail" id="m110">
    <input type="radio" name="mail" id="m111">
    <input type="radio" name="mail" id="m112">
    <input type="radio" name="mail" id="m113">
    <input type="radio" name="mail" id="m114">
    <input type="radio" name="mail" id="m115">

    <div class="categories">
        <label for="cat-all">All Mail</label>
        <label for="cat-news">News</label>
        <label for="cat-updates">Updates</label>
        <label for="cat-promotional">Promotional</label>
        <label for="cat-spam">Spam</label>
        <label for="cat-trash">Trash</label>
        <label class="sub-label" for="sub-Mesa_Times">Mesa Times</label>
        <label class="sub-label" for="sub-Cactus_News">Cactus News</label>
        <label class="sub-label" for="sub-Murkland_Times">Murkland Times</label>
        <label class="sub-label" for="sub-Icy_News">Icy News</label>
        <label class="sub-label" for="sub-Cherry_Bomb">Cherry Bomb</label>
        <label class="sub-label" for="sub-Acorn">Acorn</label>
        <label class="sub-label" for="sub-Fatui">Fatui</label>
        <label class="sub-label" for="sub-International_News_Network">International News Network</label>
        <label class="sub-label" for="sub-Glacial_Press">Glacial Press</label>
        <label class="sub-label" for="sub-Great_Sylven">Great Sylven</label>
        <label class="sub-label" for="sub-Bedrock_Chronicle">Bedrock Chronicle</label>
        <label class="sub-label" for="sub-Mushroom_Times">Mushroom Times</label>
        <label class="sub-label" for="sub-Slime_Times">Slime Times</label>
    </div>

    <div class="inbox">
        <label class="mail updates" for="m1">
            <div class="mail-title">Welcome To The OverNet [PINNED]</div>
            <div class="mail-sub">Squid</div>
        </label>

        <label class="mail updates" for="m2">
            <div class="mail-title">CEO Statement TLDR</div>
            <div class="mail-sub">Squid</div>
        </label>

        <label class="mail news Mesa_Times" for="m3">
            <div class="mail-title">Mesa Times 6/19/26</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail trash bedrock_chronicle" for="m4">
            <div class="mail-title">bedrock chronicle 6/18/26</div>
            <div class="mail-sub">bedrock chronicle</div>
        </label>

        <label class="mail updates" for="m5">
            <div class="mail-title">GTA 6</div>
            <div class="mail-sub">Squid</div>
        </label>

        <label class="mail news Cactus_News" for="m6">
            <div class="mail-title">Cactus News 6/18/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Murkland_Times" for="m7">
            <div class="mail-title">The Murkland Times Edition 9</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Icy_News" for="m8">
            <div class="mail-title">Icy News 6/17/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m9">
            <div class="mail-title">Cherry Bomb No. 8</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail updates" for="m10">
            <div class="mail-title">Important News Infomation</div>
            <div class="mail-sub">Squid</div>
        </label>

        <label class="mail spam Spam_Company" for="m11">
            <div class="mail-title">Canned Meat Product</div>
            <div class="mail-sub">Spam Company</div>
        </label>

        <label class="mail news Acorn" for="m12">
            <div class="mail-title">Acorn 6/15/26</div>
            <div class="mail-sub">Acorn</div>
        </label>

        <label class="mail news Acorn" for="m13">
            <div class="mail-title">Acorn 6/14/26</div>
            <div class="mail-sub">Acorn</div>
        </label>

        <label class="mail news Murkland_Times" for="m14">
            <div class="mail-title">The Murkland Times Edition 8</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news bedrock_chronicle" for="m15">
            <div class="mail-title">bedrock chronicle 6/14/26</div>
            <div class="mail-sub">bedrock chronicle</div>
        </label>

        <label class="mail news Fatui" for="m16">
            <div class="mail-title">Fatui 6/14/26</div>
            <div class="mail-sub">Fatui</div>
        </label>

        <label class="mail news International_News_Network" for="m17">
            <div class="mail-title">The International Volume 8</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news Cactus_News" for="m18">
            <div class="mail-title">Cactus News 6/13/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Mesa_Times" for="m19">
            <div class="mail-title">Mesa Times 6/12/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Murkland_Times" for="m20">
            <div class="mail-title">The Murkland Times Edition 7</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Mesa_Times" for="m21">
            <div class="mail-title">Mesa Times 6/11/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Acorn" for="m22">
            <div class="mail-title">Acorn 6/11/26</div>
            <div class="mail-sub">Acorn</div>
        </label>

        <label class="mail news Mesa_Times" for="m23">
            <div class="mail-title">Mesa Times 6/10/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news International_News_Network" for="m24">
            <div class="mail-title">The International Volume 7</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news Glacial_Press" for="m25">
            <div class="mail-title">Glacial Press No. 8</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Murkland_Times" for="m26">
            <div class="mail-title">The Murkland Times Edition 6</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Great_Sylven" for="m27">
            <div class="mail-title">The Great Sylven W3</div>
            <div class="mail-sub">Great Sylven</div>
        </label>

        <label class="mail news Cactus_News" for="m28">
            <div class="mail-title">Cactus News 6/7/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m29">
            <div class="mail-title">The Bedrock Chronicle 6/7/2026</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news Mesa_Times" for="m30">
            <div class="mail-title">Mesa Times 6/7/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail updates Lucifela" for="m31">
            <div class="mail-title">Future Plans</div>
            <div class="mail-sub">Lucifela</div>
        </label>

        <label class="mail news Mesa_Times" for="m32">
            <div class="mail-title">Mesa Times 6/5/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m33">
            <div class="mail-title">The Bedrock Chronicle 6/5/2026</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news Mesa_Times" for="m34">
            <div class="mail-title">Mesa Times 6/5/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Mushroom_Times" for="m35">
            <div class="mail-title">Mushroom Times 6/4/2026</div>
            <div class="mail-sub">Mushroom Times</div>
        </label>

        <label class="mail news Mesa_Times" for="m36">
            <div class="mail-title">Mesa Times 6/4/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m37">
            <div class="mail-title">The Bedrock Chronicle 6/4/2026</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news Mesa_Times" for="m38">
            <div class="mail-title">Mesa Times 6/3/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m39">
            <div class="mail-title">The Bedrock Chronicles 6/2/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news Mesa_Times" for="m40">
            <div class="mail-title">Mesa Times 6/2/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Cactus_News" for="m41">
            <div class="mail-title">Cactus News 6/02/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Murkland_Times" for="m42">
            <div class="mail-title">The Murkland Times Edition 5</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Cactus_News" for="m43">
            <div class="mail-title">Cactus News 6/1/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Glacial_Press" for="m44">
            <div class="mail-title">Glacial Press No. 7</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news International_News_Network" for="m45">
            <div class="mail-title">The International Volume 6</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m46">
            <div class="mail-title">The Bedrock Chronicles 6/1/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m47">
            <div class="mail-title">The Bedrock Chronicles 5/31/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail updates JosBot" for="m48">
            <div class="mail-title">Who am I?</div>
            <div class="mail-sub">JosBot</div>
        </label>

        <label class="mail news Cactus_News" for="m49">
            <div class="mail-title">Cactus News 5/30/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m50">
            <div class="mail-title">The Bedrock Chronicles 5/30/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news International_News_Network" for="m51">
            <div class="mail-title">The International Volume 5</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news The_Slime_Times" for="m52">
            <div class="mail-title">The Slime Times No. 7</div>
            <div class="mail-sub">The Slime Times</div>
        </label>

        <label class="mail news Cactus_News" for="m53">
            <div class="mail-title">Cactus News 5/29/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m54">
            <div class="mail-title">The Bedrock Chronicles 5/29/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news International_News_Network" for="m55">
            <div class="mail-title">The International Volume 4</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news Mesa_Times" for="m56">
            <div class="mail-title">Mesa Times 5/28/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m57">
            <div class="mail-title">The Bedrock Chronicles 5/28/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail news Great_Sylven" for="m58">
            <div class="mail-title">The Great Sylven W2</div>
            <div class="mail-sub">Great Sylven</div>
        </label>

        <label class="mail news Bedrock_Chronicle" for="m59">
            <div class="mail-title">The Bedrock Chronicles 5/26/26</div>
            <div class="mail-sub">Bedrock Chronicle</div>
        </label>

        <label class="mail promotional Iron_Co_Company_Email" for="m60">
            <div class="mail-title">Iron Co Update</div>
            <div class="mail-sub">Iron Co Company Email</div>
        </label>

        <label class="mail news International_News_Network" for="m61">
            <div class="mail-title">The International Volume 3</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news Great_Sylven" for="m62">
            <div class="mail-title">The Great Sylven W1</div>
            <div class="mail-sub">Great Sylven</div>
        </label>

        <label class="mail news Mesa_Times" for="m63">
            <div class="mail-title">Mesa Times 5/25/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Cactus_News" for="m64">
            <div class="mail-title">Cactus News 5/25/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news International_News_Network" for="m65">
            <div class="mail-title">The International Volume 2</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news International_News_Network" for="m66">
            <div class="mail-title">The International Volume 1</div>
            <div class="mail-sub">International News Network</div>
        </label>

        <label class="mail news Glacial_Press" for="m67">
            <div class="mail-title">Glacial Press No. 6</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Slime_Times" for="m68">
            <div class="mail-title">Slime Times 5/23/2026</div>
            <div class="mail-sub">Slime Times</div>
        </label>

        <label class="mail news Mesa_Times" for="m69">
            <div class="mail-title">Mesa Times 5/23/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Cactus_News" for="m70">
            <div class="mail-title">Cactus News 5/23/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m71">
            <div class="mail-title">Cherry Bomb No. 7</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail news Murkland_Times" for="m72">
            <div class="mail-title">The Murkland Times Edition 4</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Mesa_Times" for="m73">
            <div class="mail-title">Mesa Times 5/22/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Slime_Times" for="m74">
            <div class="mail-title">Slime Times 5/22/2026</div>
            <div class="mail-sub">Slime Times</div>
        </label>

        <label class="mail news Murkland_Times" for="m75">
            <div class="mail-title">The Murkland Times Edition 3</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Glacial_Press" for="m76">
            <div class="mail-title">Glacial Press No. 5</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Cactus_News" for="m77">
            <div class="mail-title">Cactus News 5/22/26</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Murkland_Times" for="m78">
            <div class="mail-title">The Murkland Times Edition 2</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m79">
            <div class="mail-title">Cherry Bomb No. 6</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail news Slime_Times" for="m80">
            <div class="mail-title">Slime Times 5/21/2026</div>
            <div class="mail-sub">Slime Times</div>
        </label>

        <label class="mail news Murkland_Times" for="m81">
            <div class="mail-title">The Murkland Times Edition 1</div>
            <div class="mail-sub">Murkland Times</div>
        </label>

        <label class="mail news Cactus_News" for="m82">
            <div class="mail-title">Cactus News 5/21/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Mesa_Times" for="m83">
            <div class="mail-title">Mesa Times 5/20/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Slime_Times" for="m84">
            <div class="mail-title">Slime Times 5/20/2026</div>
            <div class="mail-sub">Slime Times</div>
        </label>

        <label class="mail news Cactus_News" for="m85">
            <div class="mail-title">Cactus News 5/20/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Glacial_Press" for="m86">
            <div class="mail-title">Glacial Press No. 4</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m87">
            <div class="mail-title">Cherry Bomb No. 5</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail news Glacial_Press" for="m88">
            <div class="mail-title">Glacial Press No. 3</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Slime_Times" for="m89">
            <div class="mail-title">Slime Times 5/19/2026</div>
            <div class="mail-sub">Slime Times</div>
        </label>

        <label class="mail news Cactus_News" for="m90">
            <div class="mail-title">Cactus News 5/19/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Mesa_Times" for="m91">
            <div class="mail-title">Mesa Times 5/19/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m92">
            <div class="mail-title">Cherry Bomb No. 4</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m93">
            <div class="mail-title">Cherry Bomb No. 3</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail news Mesa_Times" for="m94">
            <div class="mail-title">Mesa Times 5/18/2026</div>
            <div class="mail-sub">Mesa Times</div>
        </label>

        <label class="mail news Icy_News" for="m95">
            <div class="mail-title">Icy News 5/18/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Cactus_News" for="m96">
            <div class="mail-title">Cactus News 5/18/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Fatui" for="m97">
            <div class="mail-title">Fatui 5/18/26</div>
            <div class="mail-sub">Fatui</div>
        </label>

        <label class="mail news Glacial_Press" for="m98">
            <div class="mail-title">Glacial Press No. 2</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m99">
            <div class="mail-title">Cherry Bomb No. 2</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>

        <label class="mail news Cactus_News" for="m100">
            <div class="mail-title">Cactus News 5/17/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Glacial_Press" for="m101">
            <div class="mail-title">Glacial Press No. 1</div>
            <div class="mail-sub">Glacial Press</div>
        </label>

        <label class="mail news Icy_News" for="m102">
            <div class="mail-title">Icy News 5/17/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Cactus_News" for="m103">
            <div class="mail-title">Cactus News 5/16/2026</div>
            <div class="mail-sub">Cactus News</div>
        </label>

        <label class="mail news Fatui" for="m104">
            <div class="mail-title">Fatui 5/16/26</div>
            <div class="mail-sub">Fatui</div>
        </label>

        <label class="mail news Icy_News" for="m105">
            <div class="mail-title">Icy News 5/16/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Mushroom_Times" for="m106">
            <div class="mail-title">Mushroom Times 5/15/2026</div>
            <div class="mail-sub">Mushroom Times</div>
        </label>

        <label class="mail news Icy_News" for="m107">
            <div class="mail-title">Icy News 5/15/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Icy_News" for="m108">
            <div class="mail-title">Icy News 5/14/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Fatui" for="m109">
            <div class="mail-title">Fatui 5/14/26</div>
            <div class="mail-sub">Fatui</div>
        </label>

        <label class="mail news Mushroom_Times" for="m110">
            <div class="mail-title">Mushroom Times 5/13/2026</div>
            <div class="mail-sub">Mushroom Times</div>
        </label>

        <label class="mail news Icy_News" for="m111">
            <div class="mail-title">Icy News 5/13/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Mushroom_Times" for="m112">
            <div class="mail-title">Mushroom Times 5/12/2026</div>
            <div class="mail-sub">Mushroom Times</div>
        </label>

        <label class="mail news Icy_News" for="m113">
            <div class="mail-title">Icy News 5/12/2026</div>
            <div class="mail-sub">Icy News</div>
        </label>

        <label class="mail news Mushroom_Times" for="m114">
            <div class="mail-title">Mushroom Times 5/11/2025</div>
            <div class="mail-sub">Mushroom Times</div>
        </label>

        <label class="mail news Cherry_Bomb" for="m115">
            <div class="mail-title">Cherry Bomb No. 1</div>
            <div class="mail-sub">Cherry Bomb</div>
        </label>
    </div>

    <div class="viewer">
        <div class="viewer-panel default">
            <h2>Inbox</h2>
            <p>Select a message.</p>
        </div>

        <div class="viewer-panel m1">
            <h2>Welcome [USER]</h2>

            <div class="mail-images">
        
            </div>

            <div class="mail-content">
                Hello, and welcome to the OverNet.<br>I am Squid, I am a resident of Rakau nation and this is my personal project for the Daily Emerald SMP and its news. This project is meant to look like Windows 95 though not a 1-1 recreation.<br><br>If you have a suggestion, find a bug, or anything else, my contact is squid6245 on discord.
            </div>
        </div>

        <div class="viewer-panel m2">
            <h2>TLDR of ''OFFICIAL CEO STATEMENT''</h2>

            <div class="mail-images">
        
            </div>

            <div class="mail-content">
                The Daily Emerald SMP was originally planned as a small 12 nation server to help create content, but quickly grew beyond expectations, gaining over 10,000 members in just two weeks. The project's sole developer reportedly refused requested code changes before a fallout that ultimately led to their firing.<br><br>Development was restarted shortly afterward, but the SMP's management structure is now being rebuilt from the ground up after being designed for a much smaller community. Sources say the team would rather delay the project for months than release an unfinished server. (Sources suggest a launch could happen as early as mid-June or August, though no official date has been announced.)<br><br>To help keep the community engaged while development continues, a public test server is scheduled to open on June 22. (The countdown to the test server launch is visible on the desktop.)
            </div>
        </div>

        <div class="viewer-panel m3">
            <h2>Mesa Times 6/19/26</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-19-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-19-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-19-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-19-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Mesa Times newspaper for 6/19/26 covers: The fracturing, More delays in the SMP, DOXXing lockdown, And the personal thoughts of syko, and much more.
            </div>
        </div>

        <div class="viewer-panel m4">
            <h2>bedrock chronicle 6/18/26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-18-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                bedrock chronicle newspaper for 6/18/26 covers: The new mesa deal, Mesa's president steps down from their role, and the election starts for the Mesa biome.
            </div>
        </div>

        <div class="viewer-panel m5">
            <h2>GTA 6 Pre-Order June 25th</h2>

            <div class="mail-images">
                <img src="images/custom/squid/updates/GTA6.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">

            </div>
        </div>

        <div class="viewer-panel m6">
            <h2>Cactus News 6/18/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/06-18-2026_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/06-18-2026_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/06-18-2026_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/06-18-2026_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 6/18/26 covers: New strict policies being affiliated discords, Lucifela's annoucment, The Ourobors SMP, an interview with PrimalBunion and UI_For_Squid, and much more.
            </div>
        </div>

        <div class="viewer-panel m7">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E9_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Murk/E9_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Murk/E9_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: The market place rumors, The release of the <a href="https://thankdapro.github.io/murklandtimes/">Murkland website</a>, and more.
            </div>
        </div>

        <div class="viewer-panel m8">
            <h2>Icy News 6/17/2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/6-17-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 6/17/2026 covers: Primals ban and the reason behind it.
            </div>
        </div>

        <div class="viewer-panel m9">
            <h2>Cherry Bomb 6/16/26</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_8.jpg" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper for 6/16/26 covers: PrimalBunion, UI_For_Squid, Roselot, Lord_Unicronus, and SleepyThymeT have decided to release my own server called the <a href="https://discord.gg/965RjzXf">Ouroboros SMP</a>. This was decided due to the fact the Emerald SMP is not in a state where they can produce a product they belive the players deserve.
            </div>
        </div>

        <div class="viewer-panel m10">
            <h2>Important Infomation</h2>

            <div class="mail-images">
                <img src="images/custom/squid/updates/6_16_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/custom/squid/updates/6_16_26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/custom/squid/updates/6_16_26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                It was stated that newspapers are considered advertisements, and advertisements are not permitted to discuss banned players or groups that contain banned players. As a result, newspapers should avoid mentioning such groups or any banned individuals (for example, Lacha).<br><br>Because of this, we over at W 3.14 strongly recommend that news agencies exercise extreme caution with future publications, or temporarily suspend publishing until the situation is clarified.<br><br>That said, Lucifela has stated: "If you're a news agency and weren't explicitly barred from posting, you can exist."
            </div>
        </div>

        <div class="viewer-panel m11">
            <h2>Canned Meat Product</h2>

            <div class="mail-images">
                <img src="images/custom/spam/spamcan/06-15-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                It is spam :)
            </div>
        </div>

        <div class="viewer-panel m12">
            <h2>Acorn 6/15/26</h2>

            <div class="mail-images">
                <img src="images/news/Acorn/DailyAcorn615pt1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Acorn/DailyAcorn615pt2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Acorn newspaper for 6/15/26 covers: The World Cup results, Polical turmoil in the Jungle biome, and more.
            </div>
        </div>

        <div class="viewer-panel m13">
            <h2>Acorn 6/14/26</h2>

            <div class="mail-images">
                <img src="images/news/Acorn/DailyAcorn614.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Acorn newspaper for 6/14/26 covers: The new peace treaty.
            </div>
        </div>

        <div class="viewer-panel m14">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E8.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: Porkys Funeral, Statue Market Place, and "Shrek-fil-a" and the "Murkland Times" teams up.
            </div>
        </div>

        <div class="viewer-panel m15">
            <h2>bedrock chronicle 6/14/26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-14-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                bedrock chronicle newspaper for 6/14/26 covers: The Overworld cup.
            </div>
        </div>

        <div class="viewer-panel m16">
            <h2>Fatui 6/14/26</h2>

            <div class="mail-images">
                <img src="images/news/Fatui/Fatui_2026-06-14.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Fatui/Fatui_2026-06-14_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Fatui newspaper for 6/14/26 covers: Their Genshin Impact game night.
            </div>
        </div>

        <div class="viewer-panel m17">
            <h2>The International 6/13/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/6_13_26_1.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_13_26_2.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_13_26_3.jpg" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper for 6/13/26 covers: The Vanguard terrorists, The end of the Blossomgate drama, The Family System, and much more.
            </div>
        </div>

        <div class="viewer-panel m18">
            <h2>Cactus News 6-13-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/6-13-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/6-13-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/6-13-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/6-13-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 6/13/2026 covers: Claims from Lacha, Josbots responce to the claims, the Vanguard coup, and much more.
            </div>
        </div>

        <div class="viewer-panel m19">
            <h2>Mesa Times 6-12-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-12-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-12-26_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/12/2026 covers: The INSIGHT coup, and the Vanguard.
            </div>
        </div>

        <div class="viewer-panel m20">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E7.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: Community Mourns Porky's Death, Aby leaves the Murkland Times, Thankdapro sad
            </div>
        </div>

        <div class="viewer-panel m21">
            <h2>Mesa Times 6-11-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-11-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-11-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-11-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-11-26_4.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-11-26_5.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-11-26_6.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/11/2026 covers: The CEO and Founder of StarNova, The ForgottenSMP, Squid of the Swamp Nation, and much more.
            </div>
        </div>

        <div class="viewer-panel m22">
            <h2>Acorn 6/11/26</h2>

            <div class="mail-images">
                <img src="images/news/Acorn/THE_DAILY_ACORN_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Acorn newspaper for 6/11/26 covers: The Tumult in the UB, A a new religon in the UP
            </div>
        </div>

        <div class="viewer-panel m23">
            <h2>Mesa Times 6-10-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-10-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_4.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_5.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_6.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_7.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_8.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_9.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_10.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-10-26_11.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/10/2026 covers: The post Lacha made on the Emerald SMP Subreddit, and The Responce from Josbot. <i>This is an important edition and I implore you to read it in full.</i><br><br><a href="https://www.reddit.com/r/TheDailyEmerald/comments/1u1uwx5/comment/oqtzdab/">Reddit Post</a>
            </div>
        </div>

        <div class="viewer-panel m24">
            <h2>The International 6/08/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/6_08_26_1.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_08_26_2.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_08_26_3.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_08_26_4.jpg" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper for 6/08/26 covers: Admin interference, The trident, New Spawn City images, The 2026 Overworld Cup, and much more
            </div>
        </div>

        <div class="viewer-panel m25">
            <h2>The Glacial Press 6/8/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews_June_7.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 6/8/26 covers: The supreme courts 5 new judges.
            </div>
        </div>

        <div class="viewer-panel m26">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E6.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: The attack from Terrorist Griefers, Swampers flag release, and more.
            </div>
        </div>

        <div class="viewer-panel m27">
            <h2>The Great Sylven 6/7/26</h2>

            <div class="mail-images">
                <img src="images/news/Sylven/Great_Sylven_W3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Great Sylven newspaper for 6/7/26 covers: An increasing reports of anomalous activities.
            </div>
        </div>

        <div class="viewer-panel m28">
            <h2>Cactus News 6-7-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/6-7-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/6-7-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 6/7/2026 covers: The Overworld cups annoucment, the annoucment made by President Fox of the Desert nation, and more.
            </div>
        </div>

        <div class="viewer-panel m29">
            <h2>The Bedrock Chronicle 6-7-2026</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-7-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicle newspaper for 6/7/2026 covers: The unification in sports, and the feelings towrads these types of events.
            </div>
        </div>

        <div class="viewer-panel m30">
            <h2>Mesa Times 6-7-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-7-26_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/7/2026 covers: The new images of the Mesa and Desert biomes and that the diplomats will be speaking soon, along with that we have a link to the Swamp biomes Constitution.<br><br><a href="https://docs.google.com/document/d/1rMS74x-2K58fspE9P-3Dl4liCiUNFgey_rHfD6Eccdo">Swamp biomes Constitution</a>
            </div>
        </div>

        <div class="viewer-panel m31">
            <h2>Future plans for the SMP</h2>

            <div class="mail-images">
        
            </div>

            <div class="mail-content">
                I'd like to set some things straight regarding the recent reaction of the future plans for this SMP:<br><br>First of all, not all of what was said has been decided upon-- this means that the details of what happens can change immensely, as we want this server to be player-run, but we also do not want players to delete their server in anger, causing a loss of weeks worth of work. We have seen and understood your concerns on why we wish to move forward with the plan to take ownership of the servers. <br><br>With over 11,000 members and counting, we want to ensure everyone has a fun and peaceful experience. We don't want anyone to be uncomfortable within their nation. We recognize that this seems like a huge overreach of power but it is something that must be done. Due to an uncountable number of reports from players regarding others in different nation servers, whether it's harassment to outright illegal articles, the abuse of moderation in order to suppress others, and more, we want the owners of the servers to transfer ownership.<br><br>What does this mean for you?<br> We do not want to take power away from the people, however we wish to ensure that the players can moderate effectively and without abuse. The installment of of Daily Emerald SMP staff members for moderation of the nations is something that is still being talked about and may not happen at all. I'd like to iterate that if this does happen, we'll prioritize moderators to be from the same biome. They will also not have full admin access, but instead, permissions to manage the players in order to remove, warn, or mute, them for any rule broken.<br><br>As mentioned in some sources, we plan to reform the staff team to be one of high standards and versatility.
            </div>
        </div>

        <div class="viewer-panel m32">
            <h2>Mesa Times 6-5-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-5-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-5-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-5-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-5-26_4.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-5-26_5.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/5/2026 covers: An exclusive interview with The chief diplomat of the dark forests United Provinces and Lucifela One of the administrators for the Emerald SMP, Mushroom biome infigting, The aftermath of the plains biomes collapse, and much much more.
            </div>
        </div>

        <div class="viewer-panel m33">
            <h2>The Bedrock Chronicle 6-5-2026</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-5-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicle newspaper for 6/5/2026 covers: The reveal of more of the map, and the host of the server opening soon.
            </div>
        </div>

        <div class="viewer-panel m34">
            <h2>Mesa Times 6-5-2026</h2>

            <div class="mail-images">
        
            </div>

            <div class="mail-content">
                Polls are now being introduced, with more development underway as groups begin using public voting to guide future decisions.<br><br>The Mooshroom Islands are currently in a state of unrest following the deletion of their Discord server. This occurred after the Discord owner, had a crash out after losing two elections, and delete their nations discord server. As a result, the Mooshroom Islands remain in a state of unrest as of now.<br><br>The Jungle biome is planning a military reformation and expansion. Lazy a cabinet member and their server owner, has resigned today. An election will be held to decide the next leader. It is currently unknown if the Council of Ministers will remain active as a group.<br><br>Mesa’s Port Duncan administration has been fully transferred to the second in command, Olaf.<br><br>Advertisements (extended to tomorrow):<br>Savanna National Vanguard<br>Global Logistics Company<br>New Piglin Cartel<br>Eternal Trade Coalition<br><br>More updates and interviews will follow tomorrow.
            </div>
        </div>

        <div class="viewer-panel m35">
            <h2>Mushroom Times 6-4-2026</h2>

            <div class="mail-images">
                <img src="images/news/MushroomTimes/6-4-26.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/MushroomTimes/6-4-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/MushroomTimes/6-4-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/MushroomTimes/6-4-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mushroom Times newspaper for 6/4/2026 covers: Their Discord server being nuked, Admin abuse, Pride month, Mens Health Awarness, and so much more.
            </div>
        </div>

        <div class="viewer-panel m36">
            <h2>Mesa Times 6-4-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-4-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-4-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-4-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-4-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/4/2026 covers: Progress of the maps creation, the Blossomgate Scandal caused by the Cherry Biome, Mesa's stance of the Snow biome, and loads more.
            </div>
        </div>

        <div class="viewer-panel m37">
            <h2>The Bedrock Chronicle 6-4-2026</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-4-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicle newspaper for 6/4/2026 covers: The Bedrock issue, and Lucifelas words.
            </div>
        </div>

        <div class="viewer-panel m38">
            <h2>Mesa Times 6-3-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-3-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-3-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-3-26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/3/2026 covers: The resizing of the map from 16k to 18k, and more.
            </div>
        </div>

        <div class="viewer-panel m39">
            <h2>The Bedrock Chronicles 6-2-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-2-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 6/2/26 covers: The opening of the Bedrock Nation courts.
            </div>
        </div>

        <div class="viewer-panel m40">
            <h2>Mesa Times 6-2-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/6-2-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-2-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/6-2-26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 6/2/2026 covers: The scandal in the plains biome, the Jungle biomes in distress, and more.
            </div>
        </div>

        <div class="viewer-panel m41">
            <h2>Cactus News 6/02/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/6-02-26_1.jpg" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 6/02/26 covers: Desert Celi free trade agreement, and a message from Shio
            </div>
        </div>

        <div class="viewer-panel m42">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E5.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: The threat of the Plains biome, Swampers family tree, and more.
            </div>
        </div>

        <div class="viewer-panel m43">
            <h2>Cactus News 6-1-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/6-1-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/6-01-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 6/1/2026 covers: The Desert nations public confrence, their addition to the wiki, and more.
            </div>
        </div>

        <div class="viewer-panel m44">
            <h2>The Glacial Press 6/01/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews7.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 6/01/26 covers: A new councillor beening elected in the United North, NSO goes to war, and 2 UN Cititzens have been banished for 3 months.
            </div>
        </div>

        <div class="viewer-panel m45">
            <h2>The International 6/01/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/6_01_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_01_26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_01_26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/6_01_26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper for 6/01/26 covers: Savanna and Mesa biomes join a resource pack, Rakau's first banishment was their ambassador, Reminder that "TECHNOBLADE NEVER DIES", and finally Happy pride month to all!
            </div>
        </div>

        <div class="viewer-panel m46">
            <h2>The Bedrock Chronicles 6-1-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_6-1-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 6/1/26 covers: todays weather, as finally theres nothing news worthy.
            </div>
        </div>

        <div class="viewer-panel m47">
            <h2>The Bedrock Chronicles 5-31-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_5-31-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 5/31/26 covers: Notchville and Bedrock Nation agree to no conflict for the time being.
            </div>
        </div>

        <div class="viewer-panel m48">
            <h2>Who am I?</h2>

            <div class="mail-images">
        
            </div>

            <div class="mail-content">
                Hey everyone, I'm Jos, the new lead developer and co-owner of the Emerald SMP. I'm taking over development alongside Emerald and stepping into a leadership role to help rebuild and improve the server. I’ve been playing Minecraft for about 10 years and building servers for the last 5, with experience working alongside creators like SpeedSilver, Graser, Kiingtong, and Tubbo, as well as organizations like VALORANT and various Minecraft networks.<br><br>Going forward, the server will be going through a restructuring period as I organize and rebuild systems to improve overall quality and player experience. There is no release date yet, as the focus is on creating a high-quality experience from the ground up.<br><br>I’ll be sharing updates here regularly, involving the community in ideas, and opening applications for different roles soon. My goal is to make Emerald SMP not just fun to play, but something the community helps shape. Thanks for your patience while things are being improved.
            </div>
        </div>

        <div class="viewer-panel m49">
            <h2>Cactus News 5/30/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-30-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-30-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 5/30/26 covers: Lacha being stripped of their powers, NSO was lying about being disbanded, and more.
            </div>
        </div>

        <div class="viewer-panel m50">
            <h2>The Bedrock Chronicles 5-30-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_5-30-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 5/30/26 covers: the growing instablity across the biomes and their threats on Notchville.
            </div>
        </div>

        <div class="viewer-panel m51">
            <h2>The International 5/29/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/5_29_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_29_26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_29_26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper for 5/29/26 covers: The Dev and Admin Lacha's removal, the fact NSO never disbanded, the New Worlds structure list, and much more.
            </div>
        </div>

        <div class="viewer-panel m52">
            <h2>The Slime Times 5-29-26</h2>

            <div class="mail-images">
                <img src="images/news/slimetimes/slimetimes_5-29-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/slimetimes_5-29-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/slimetimes_5-29-26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Slime Times newspaper for 5/29/26 covers: info about the New World is opening soon, them hiring writers, their new banner, and more.
            </div>
        </div>

        <div class="viewer-panel m53">
            <h2>Cactus News 5/29/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-29-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-29-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-29-26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 5/29/26 covers: The NSO disbands, Desert Nations new banner, and more.
            </div>
        </div>

        <div class="viewer-panel m54">
            <h2>The Bedrock Chronicles 5-29-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_5-29-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 5/29/26 covers: the worlds seed has changed, causing massive shifts in community opion, and server instablity.
            </div>
        </div>

        <div class="viewer-panel m55">
            <h2>The International 5/28/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/5_28_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_28_26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_28_26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_28_26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper for 5/28/26 covers: The NSO disanding, Taigas elections, a reminder of the new world being open soon and more.
            </div>
        </div>

        <div class="viewer-panel m56">
            <h2>Mesa Times 5-28-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-28-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-28-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-28-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-28-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/28/2026 covers: The RSI, The world opening in 2 days, and more.
            </div>
        </div>

        <div class="viewer-panel m57">
            <h2>The Bedrock Chronicles 5-28-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_5-28-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 5/28/26 covers: them moving their headquarters to the Mesa biome.
            </div>
        </div>

        <div class="viewer-panel m58">
            <h2>The Great Sylven 5/27/26</h2>

            <div class="mail-images">
                <img src="images/news/Sylven/Weekly_Sylven_W0-2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Great Sylven newspaper for 5/27/26 covers: The change of the map, and the slintering of many groups.
            </div>
        </div>

        <div class="viewer-panel m59">
            <h2>The Bedrock Chronicles 5-26-26</h2>

            <div class="mail-images">
                <img src="images/news/bedrock_chronicle/Bedrock_Chronicle_5-26-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Bedrock Chronicles newspaper for 5/26/26 covers: a the alliance between the Mesa biome and DLF ending.
            </div>
        </div>

        <div class="viewer-panel m60">
            <h2>Iron Co Update</h2>

            <div class="mail-images">
        
            </div>

            <div class="mail-content">
                <p>New mining regulations were previously implemented, and automated extraction has been restricted in all controlled zones.</p><p>Only activities conducted within approved guidelines are recognized by official policy. Any operations outside these guidelines are not sanctioned and will not be considered part of authorized company activity.</p>
            </div>
        </div>

        <div class="viewer-panel m61">
            <h2>The International 5/26/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/5_26_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_26_26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_26_26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper for 5/26/26 covers: Rakau Security Measures, Scam PSA, The Blue Cross, Bedrock Nation leaving the DLF deal, and more.
            </div>
        </div>

        <div class="viewer-panel m62">
            <h2>The Great Sylven Week 1</h2>

            <div class="mail-images">
                <img src="images/news/Sylven/Weekly_Sylven_W0.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Great Sylven newspaper for 5/26/26 covers: The rumbling heard near the Emerald Basin.
            </div>
        </div>

        <div class="viewer-panel m63">
            <h2>Mesa Times 5-25-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-25-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-25-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/25/2026 covers: The possible Bedrock Nation merging with the Mesa biome.
            </div>
        </div>

        <div class="viewer-panel m64">
            <h2>Cactus News 5/25/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-25-26_1.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-25-26_2.jpg" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 5/25/26 covers: Discord server boosted to leve 2, The grand plan of the Fox, Non-Agression pact signed with the NSO, and more.
            </div>
        </div>

        <div class="viewer-panel m65">
            <h2>The International 5/25/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/5_25_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_25_26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper edition for 5/25/26 covers: the pact signed by the Desert biome and the NSO, a PSA about lag, Cherry biomes elections, and more.
            </div>
        </div>

        <div class="viewer-panel m66">
            <h2>The International 5/24/26</h2>

            <div class="mail-images">
                <img src="images/news/The_International/5_24_26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/The_International/5_24_26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The International newspaper edition for 5/24/26 covers: the Jungle War, Transportation Updates, Redstone Lab, and more.
            </div>
        </div>

        <div class="viewer-panel m67">
            <h2>The Glacial Press 5/23/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews6.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 5/23/26 covers: The growing discourse in the desert.
            </div>
        </div>

        <div class="viewer-panel m68">
            <h2>Slime Times 5-23-2026</h2>

            <div class="mail-images">
                <img src="images/news/slimetimes/5-23-26.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/5-23-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/5-23-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/5-23-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Slime Times newspaper for 5/23/2026 covers: Ratifying their constituion happens today, An interview with Bonanza, and much more.
            </div>
        </div>

        <div class="viewer-panel m69">
            <h2>Mesa Times 5-23-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-23-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-23-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-23-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-23-26_4.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-23-26_5.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-23-26_6.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-23-26_7.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/23/2026 covers: The question left in the last news letter "What is the pig cartel".
            </div>
        </div>

        <div class="viewer-panel m70">
            <h2>Cactus News 5/23/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-23-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-23-26_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 5/23/26 covers: PR regarding the Desert Nation, Agreements met with the Green Cross, and more.
            </div>
        </div>

        <div class="viewer-panel m71">
            <h2>Cherry Bomb No. 7</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_7.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper for 5/22/26 covers: The Green Cross.
            </div>
        </div>

        <div class="viewer-panel m72">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: The message from the CEO, <a href="https://thankdapro.github.io/swampers/">Offical Swamppers</a> website, and the switch from daily to weekly.
            </div>
        </div>

        <div class="viewer-panel m73">
            <h2>Mesa Times 5-22-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-22-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-22-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-22-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-22-26_4.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-22-26_5.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-22-26_6.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/22/2026 covers: The snow front conflict , and the pig cartel.
            </div>
        </div>

        <div class="viewer-panel m74">
            <h2>Slime Times 5-22-2026</h2>

            <div class="mail-images">
                <img src="images/news/slimetimes/5-22-26.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/5-22-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/slimetimes/5-22-26_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Slime Times newspaper for 5/22/2026 covers: Ancient Discoveries, The final 3, and more.
            </div>
        </div>

        <div class="viewer-panel m75">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: An interview with UI for Squid, and the polling of the nations flag.
            </div>
        </div>

        <div class="viewer-panel m76">
            <h2>The Glacial Press 5/22/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews05.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 5/22/26 covers: Terriory disputes with the Taiga biome and the Snow biome.
            </div>
        </div>

        <div class="viewer-panel m77">
            <h2>Cactus News 5/22/26</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-22-26_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cactus News newspaper for 5/22/26 covers: The Desert Nations response to the growing concerns regarding the DLF, Name change, and more.
            </div>
        </div>

        <div class="viewer-panel m78">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E2_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Murk/E2_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: A new face in the Cabinet, Job listings for "Shrek-fil-a" and "The Murkland Times", and more.
            </div>
        </div>

        <div class="viewer-panel m79">
            <h2>Cherry Bomb No. 6</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_6.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper for 5/21/26 covers: The Blue Cross.
            </div>
        </div>

        <div class="viewer-panel m80">
            <h2>Slime Times 5-21-2026</h2>

            <div class="mail-images">
                <img src="images/news/slimetimes/5-21-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Slime Times newspaper for 5/21/2026 covers: Doctrine being postponed, Recognised towns, and more.
            </div>
        </div>

        <div class="viewer-panel m81">
            <h2>The Murkland Times</h2>

            <div class="mail-images">
                <img src="images/news/Murk/E1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Murkland Times covers: The <a href="Server">https://discord.gg/RsQS6mdNMJ Discord</a> invasion, The rise of "Shrek-fil-a", and more.
            </div>
        </div>

        <div class="viewer-panel m82">
            <h2>Cactus News 5-21-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-21-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 5/21/2026 covers: The acronym compromise between Cherry and Cactus News Network, and the listing for new key positions being posted.
            </div>
        </div>

        <div class="viewer-panel m83">
            <h2>Mesa Times 5-20-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-20-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-20-26_2.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-20-26_3.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-20-26_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/20/2026 covers: The terror in the Mesa biome.
            </div>
        </div>

        <div class="viewer-panel m84">
            <h2>Slime Times 5-20-2026</h2>

            <div class="mail-images">
                <img src="images/news/slimetimes/5-20-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Slime Times newspaper for 5/20/2026 covers: The landslide victor for the leader of the swamp, Burger Mans apology, and more.
            </div>
        </div>

        <div class="viewer-panel m85">
            <h2>Cactus News 5-20-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-20-26.jpg" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-20-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 5/20/2026 covers: The National Hud Overhual.
            </div>
        </div>

        <div class="viewer-panel m86">
            <h2>The Glacial Press 5/20/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 5/20/26 covers: nationless terrorists recent threats against the UN Goverment and its citizens.
            </div>
        </div>

        <div class="viewer-panel m87">
            <h2>Cherry Bomb No. 5</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_5.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper for 5/19/26 covers: The alliance forged with the Taiga biome.
            </div>
        </div>

        <div class="viewer-panel m88">
            <h2>The Glacial Press 5/19/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 5/19/26 covers: The mysterious group only known as The Conglomerate.
            </div>
        </div>

        <div class="viewer-panel m89">
            <h2>Slime Times 5-19-2026</h2>

            <div class="mail-images">
                <img src="images/news/slimetimes/5-19-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Slime Times newspaper for 5/19/2026 covers: The reasons to visit the swamp, their hopes for the nation, and more.
            </div>
        </div>

        <div class="viewer-panel m90">
            <h2>Cactus News 5-19-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-19-26.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-20-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 5/19/2026 covers: The alleged terrorist tied to the Swamp nation, The legalization of Dried Kelp, and much more.
            </div>
        </div>

        <div class="viewer-panel m91">
            <h2>Mesa Times 5-19-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-19-26_1.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Mesa_Times/5-19-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/19/2026 covers: The growing hate towards the Snow biome.
            </div>
        </div>

        <div class="viewer-panel m92">
            <h2>Cherry Bomb No. 4</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_4.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper for 5/19/26 covers: the ownership transfer to The Daily Emeralds team.
            </div>
        </div>

        <div class="viewer-panel m93">
            <h2>Cherry Bomb No. 3</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper for 5/18/26 covers: The upcoming elections.
            </div>
        </div>

        <div class="viewer-panel m94">
            <h2>Mesa Times 5-18-2026</h2>

            <div class="mail-images">
                <img src="images/news/Mesa_Times/5-18-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mesa Times newspaper for 5/18/2026 covers: Who they are.
            </div>
        </div>

        <div class="viewer-panel m95">
            <h2>Icy News 5-18-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-18-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/18/2026 covers: The Jungle biomes regime changes.
            </div>
        </div>

        <div class="viewer-panel m96">
            <h2>Cactus News 5-18-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-18-26.png" style="width:33%; height:auto; object-fit:cover;">
        <img src="images/news/Cactus_News/5-18-26_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 5/18/2026 covers: The server delay, VP of Cactus disputing CNN claims, and more.
            </div>
        </div>

        <div class="viewer-panel m97">
            <h2>Fatui 5/18/26</h2>

            <div class="mail-images">
                <img src="images/news/Fatui/Fatui_news_3.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Fatui newspaper for 5/18/26 covers: Their request for information of the "Congoloerate" group.
            </div>
        </div>

        <div class="viewer-panel m98">
            <h2>The Glacial Press 5/18/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 5/18/26 covers: The trial held about the UN leaks.
            </div>
        </div>

        <div class="viewer-panel m99">
            <h2>Cherry Bomb No. 2</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper newspaper for 5/17/26 covers: The Constitution.
            </div>
        </div>

        <div class="viewer-panel m100">
            <h2>Cactus News 5-17-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-17-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 5/17/2026 covers: The close call for the Desert nation, and the mass migration thats expected.
            </div>
        </div>

        <div class="viewer-panel m101">
            <h2>The Glacial Press 5/17/26</h2>

            <div class="mail-images">
                <img src="images/news/Glacial_Press/GPnews1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Glacial Press for 5/17/26 covers: The Cherry nation blaming the UN for recent discourse.
            </div>
        </div>

        <div class="viewer-panel m102">
            <h2>Icy News 5-17-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-17-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/17/2026 covers: Laws and Nations.
            </div>
        </div>

        <div class="viewer-panel m103">
            <h2>Cactus News 5-16-2026</h2>

            <div class="mail-images">
                <img src="images/news/Cactus_News/5-16-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Cactus News newspaper for 5/16/2026 covers: The Deset Nation name vote results, and the Larping of a user going too far.
            </div>
        </div>

        <div class="viewer-panel m104">
            <h2>Fatui 5/16/26</h2>

            <div class="mail-images">
                <img src="images/news/Fatui/Fatui_news_2.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Fatui newspaper for 5/16/26 covers: Their job posting to join the Fatui.
            </div>
        </div>

        <div class="viewer-panel m105">
            <h2>Icy News 5-16-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-16-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/16/2026 covers: Variedy was found guilty.
            </div>
        </div>

        <div class="viewer-panel m106">
            <h2>Mushroom Times 5-15-2026</h2>

            <div class="mail-images">
                <img src="images/news/MushroomTimes/5-15-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mushroom Times newspaper for 5/15/2026 covers: A Mushroom leader was fired for calling a chatbot a Cl*nker, the growing frustration to the the server delays, and more.
            </div>
        </div>

        <div class="viewer-panel m107">
            <h2>Icy News 5-15-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-15-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/15/2026 covers: The nations laws.
            </div>
        </div>

        <div class="viewer-panel m108">
            <h2>Icy News 5-14-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-14-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/14/2026 covers: The growth of Apercube Science.
            </div>
        </div>

        <div class="viewer-panel m109">
            <h2>Fatui 5/14/26</h2>

            <div class="mail-images">
                <img src="images/news/Fatui/Fatui_news_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Fatui newspaper for 5/14/26 covers: Their mnew HQ
            </div>
        </div>

        <div class="viewer-panel m110">
            <h2>Mushroom Times 5-13-2026</h2>

            <div class="mail-images">
                <img src="images/news/MushroomTimes/5-13-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mushroom Times newspaper for 5/13/2026 covers: The Minecraft News Network getting caught making racist remarks.
            </div>
        </div>

        <div class="viewer-panel m111">
            <h2>Icy News 5-13-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-13-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/13/2026 covers: The council cutting ties with the United Biomes.
            </div>
        </div>

        <div class="viewer-panel m112">
            <h2>Mushroom Times 5-12-2026</h2>

            <div class="mail-images">
                <img src="images/news/MushroomTimes/5-12-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mushroom Times newspaper for 5/12/2026 covers: The new President and Vice President has been selected, A user caught spreading propaganda, and more.
            </div>
        </div>

        <div class="viewer-panel m113">
            <h2>Icy News 5-12-2026</h2>

            <div class="mail-images">
                <img src="images/news/Icy_News/5-12-26.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Icy News newspaper for 5/12/2026 covers: A council has been elected.
            </div>
        </div>

        <div class="viewer-panel m114">
            <h2>Mushroom Times 5-11-2025</h2>

            <div class="mail-images">
                <img src="images/news/MushroomTimes/5-11-25.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                The Mushroom Times newspaper for 5/11/2025 covers: The main 3 candidates for the presidentail campaign, and more.
            </div>
        </div>

        <div class="viewer-panel m115">
            <h2>Cherry Bomb No. 1</h2>

            <div class="mail-images">
                <img src="images/news/Cherry_Bomb/Daily_Cherry-Bomb_1.png" style="width:33%; height:auto; object-fit:cover;">
            </div>

            <div class="mail-content">
                Cherry Bomb newspaper newspaper for 5/05/26 covers: The Cherry Schism.
            </div>
        </div>
    </div>

    </div>
</head>
<body>
</body>
</html>
`
};

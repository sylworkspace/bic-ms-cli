const template = `<div class="bic">
    <div class="bic-main">
        <div :class="isCollapse ? 'bic-main-content-padding-small bic-main-content' : 'bic-main-content-padding-lager bic-main-content'" >
            <div class="bic-main-content-crumb">
                <span class="" v-for="item in crumbList" :key="item">{{item + ' / '}}</span>
            </div>
            <div class="bic-main-content-content">
                <router-view />
            </div>
        </div>
    </div>
</div>`

export default template
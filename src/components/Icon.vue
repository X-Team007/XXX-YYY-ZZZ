<style lang="less" scoped>

</style>

<template>
        <svg aria-hidden="true" :class="className">
                <use :xlink:href="xlinkHref" />
        </svg>
</template>

<script>
export default {
        props: {
                name: String,
                size: {
                        type: String,
                        default: 'default'
                }
        },
        data: function() {
                const fuc = (s) => s.toLowerCase().replace(/( |^)[a-z]/g, s => s.toUpperCase())

                return {
                        className: [
                                'icon',
                                'icon-size-' + (this.size || 'default').toLowerCase(),
                                'icon-type-' + this.name.toLowerCase()
                        ].join(' '),
                        xlinkHref: '#icon-' + fuc(this.name)
                }
        }
}
</script>
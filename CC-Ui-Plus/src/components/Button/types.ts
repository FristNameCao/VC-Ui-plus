import type { PropType } from "vue"

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
export type ButtonSize = 'large' | 'default' | 'small' | 'mini'
export type ButtonShape = 'circle' | 'round'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
    type?: ButtonType
    size?: ButtonSize
    shape?: ButtonShape
    icon?: string
    loading?: boolean
    disabled?: boolean
    block?: boolean
    iconPosition?: 'left' | 'right'
    plain?: boolean
    round?: boolean
    circle?: boolean
    style?: Record<string, any>
    nativeType?: NativeType
    autofocus?: boolean
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}

export const buttonProps = {
    type: {
        type: String as PropType<ButtonType>,
        default: 'default',
        validator: (value: string) => {
            return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(value)
        }
    },
    size: {
        type: String as PropType<ButtonType>,
        default: 'default',
        validator: (value: string) => {
            return ['large', 'default', 'small', 'mini'].includes(value)
        }
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: true
    },
    block: {
        type: Boolean,
        default: false
    },
    iconPosition: {
    },
    style: {
        type: Object,
        default: () => ({})
    },
}

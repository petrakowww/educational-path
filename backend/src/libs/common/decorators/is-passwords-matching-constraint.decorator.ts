import {
    registerDecorator,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsMatching', async: false })
export class IsMatchingConstraint implements ValidatorConstraintInterface {
    public validate(value: any, args: ValidationArguments) {
        const fieldToMatch = args.constraints[0] as string;
        const obj = args.object as Record<string, any>;

        return obj[fieldToMatch] === value;
    }

    public defaultMessage(args: ValidationArguments) {
        const fieldToMatch = args.constraints[0] as string;
        return `Значение должно совпадать с ${fieldToMatch}.`;
    }
}

export function IsMatching(fieldToMatch: string, validationOptions?: unknown) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [fieldToMatch],
            validator: IsMatchingConstraint,
        });
    };
}

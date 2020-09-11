import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";



export class JogadoresValidacaoParametrosPipe implements PipeTransform{
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    transform(value: any, metadata: ArgumentMetadata) {
    // throw new Error("Method not implemented.");

        if(!value){
            throw new BadRequestException(`O valor do parametro ${metadata.data} deve ser informado.`);
        }

        return value;
    }
}
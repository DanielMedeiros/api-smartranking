import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafiosModule } from './desafios/desafios.module';

// 'mongodb+srv://admin:hAleV2mfr7CYrgjI@cluster0.7njif.mongodb.net/smartranking?retryWrites=true&w=majority'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/smartranking',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    JogadoresModule,
    CategoriasModule,
    DesafiosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
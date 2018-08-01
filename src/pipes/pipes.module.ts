import { NgModule } from '@angular/core';
import { KeywordPipe } from './keyword/keyword';
import { RelativeTimePipe } from './relative-time/relative-time';
@NgModule({
	declarations: [KeywordPipe,
    RelativeTimePipe],
	imports: [],
	exports: [KeywordPipe,
    RelativeTimePipe]
})
export class PipesModule {}

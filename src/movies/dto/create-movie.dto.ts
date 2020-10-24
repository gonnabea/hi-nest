import { IsNumber, IsString } from "class-validator" // 실제 코드 작동 시 타입체크 해줌

export class CreateMovieDto{
@IsString()
readonly title: string;
@IsNumber()
readonly year: number;
@IsString({ each: true})
readonly genres: string[]
}
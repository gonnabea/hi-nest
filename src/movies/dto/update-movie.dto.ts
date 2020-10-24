import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator" // 실제 코드 작동 시 타입체크 해줌
import { CreateMovieDto } from "./create-movie.dto";

// export class UpdateMovieDto{
// @IsString()
// readonly title?: string; // ?: not required
// @IsNumber()
// readonly year?: number;
// @IsString({ each: true})
// readonly genres?: string[]
// }


export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    // PartialType은 프로퍼티들을 필수로 요구하지 않도록 설정:
    // 그래서 UpdateMovieDto는 CreateMovieDto에 위 설정만 적용한 것
}
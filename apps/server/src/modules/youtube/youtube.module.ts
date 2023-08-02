import { Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [YoutubeService],
  exports: [YoutubeService],
})
export class YoutubeModule {}

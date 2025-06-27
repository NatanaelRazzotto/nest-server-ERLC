import { Test, TestingModule } from '@nestjs/testing';
import { CriminalRecordService } from './criminal-record.service';

describe('CriminalRecordService', () => {
  let service: CriminalRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriminalRecordService],
    }).compile();

    service = module.get<CriminalRecordService>(CriminalRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

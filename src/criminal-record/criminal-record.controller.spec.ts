import { Test, TestingModule } from '@nestjs/testing';
import { CriminalRecordController } from './criminal-record.controller';

describe('CriminalRecordController', () => {
  let controller: CriminalRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriminalRecordController],
    }).compile();

    controller = module.get<CriminalRecordController>(CriminalRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

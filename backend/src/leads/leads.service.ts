import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private leadRepository: Repository<Lead>,
  ) {}

  create(dto: CreateLeadDto) {
    const lead = this.leadRepository.create(dto);
    return this.leadRepository.save(lead);
  }

  findAll() {
    return this.leadRepository.find();
  }
}

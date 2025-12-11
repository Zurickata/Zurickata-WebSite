import { Repository } from 'typeorm';
import { Lead } from './lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';
export declare class LeadsService {
    private leadRepository;
    constructor(leadRepository: Repository<Lead>);
    create(dto: CreateLeadDto): Promise<Lead>;
    findAll(): Promise<Lead[]>;
}

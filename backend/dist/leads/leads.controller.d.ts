import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
export declare class LeadsController {
    private readonly leadsService;
    constructor(leadsService: LeadsService);
    create(dto: CreateLeadDto): Promise<import("./lead.entity").Lead>;
    findAll(): Promise<import("./lead.entity").Lead[]>;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalPerformanceIndicator extends Model
{
    use HasFactory;

    protected $table = 'HospitalPerformanceIndicator';

    protected $fillable = [
        'metric_name',
        'value',
    ];
}
